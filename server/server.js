const express = require("express")
const cors = require("cors")
const path = require("path")
const dotenv = require("dotenv")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const connectDB = require("./config/database")

dotenv.config({ path: "./config/config.env"})

require("./config/passport").google(passport)
require("./config/passport").facebook(passport)
connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running mode in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
    
app.use(cors());
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

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.header('Origin'));
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.use(passport.initialize());
app.use(passport.session()); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
const apiRouter = require("./routes/api.routes");
const indexRouter = require('./routes/index.routes');
const authRouter = require('./routes/auth.routes');
// const userRouter = require('./routes/users.routes');
// const projectsRouter = require('./routes/projects.routes');
// const searchRouter = require('./routes/search.routes');
// const notificationsRouter = require("./routes/notifications.routes");

// Routes
app.use("/api", apiRouter);
// app.use('/', indexRouter);
app.use('/auth', authRouter);
// app.use('/users', userRouter);
// app.use('/projects', projectsRouter);
// app.use('/s', searchRouter);
// app.use('/notifications', notificationsRouter);

module.exports = app;
