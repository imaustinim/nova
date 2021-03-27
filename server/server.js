import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
// import logger from "logger";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import connectMongo from "connect-mongodb-session";
import connectDB from "./config/database.js";
import { google, facebook, twitch } from "./config/passport.js";


// Load config
dotenv.config({ path: "./config/config.env"});

// Passport config
const MongoDBStore = connectMongo(session);
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Session Middleware
app.use(cors({ oriign: "http://localhost:3000", credentials: true}));
const __dirname = path.resolve();

// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ extended: false }))
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoDBStore({
        collection: "sessions",
        uri: process.env.DATABASE_URI,
        databaseName: "myFirstDatabase"
    })
}));
app.use(passport.initialize());
app.use(passport.session()); 
google(passport);
facebook(passport);

// static setup
// app.set('view engine', 'jsx');
// app.set('views', path.join(__dirname, 'views'));


// app.use(logger('dev'));
// app.use(cookieParser());
import apiRouter from "./routes/api.routes.js"
import indexRouter from "./routes/index.routes.js"
import authRouter from "./routes/auth.routes.js"
// import usersRouter from "./routes/users.routes.js"
// import projectsRouter from "./routes/projects.routes.js"
// import searchRouter from "./routes/search.routes.js"
// import notificationsRouter from "./routes/notifications.routes.js"

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);


// app.use('/users', usersRouter);
// app.use('/projects', projectsRouter);
// app.use('/search', searchRouter);
// app.use('/notifications', notificationsRouter);
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// })

app.listen(
    PORT, 
    console.log(`Server running mode in ${process.env.NODE_ENV} mode on port ${PORT}`),
  );

export default app;
