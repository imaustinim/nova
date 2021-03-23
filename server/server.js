import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
// import logger from "logger";
import passport from "passport";
import session from "express-session";

import connectMongo from "connect-mongodb-session";
const MongoDBStore = connectMongo(session);

import connectDB from "./config/database.js";

// const path = require('path');
// const express = require('express');
// const dotenv = require("dotenv");
// const logger = require('morgan');
// const passport = require("passport")
// const session = require('express-session');
// const MongoDBStore = require("connect-mongodb-session")(session);
// const connectDB = require("./config/database");

// Load config
dotenv.config({ path: "./config/config.env"});

// Passport config
import { google } from "./config/passport.js";
import { facebook } from "./config/passport.js";
import { twitch } from "./config/passport.js";


// require('./config/passport').google(passport);
// require('./config/passport').facebook(passport);
// require('./config/passport').twitch(passport);
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(
  PORT, 
  console.log(`Server running mode in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


// Session Middleware
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

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session()); 

// static setup
// app.set('view engine', 'jsx');
// app.set('views', path.join(__dirname, 'views'));
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'build')));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(logger('dev'));
// app.use(cookieParser());
import indexRouter from "./routes/index.routes.js"
import authRouter from "./routes/auth.routes.js"
import usersRouter from "./routes/user.routes.js"
import projectsRouter from "./routes/projects.routes.js"
import searchRouter from "./routes/search.routes.js"
import notificationsRouter from "./routes/notifications.routes.js"

// const indexRouter = require('./routes/index.routes');
// const authRouter = require('./routes/auth.routes');
// const usersRouter = require('./routes/user.routes');
// const projectsRouter = require('./routes/projects.routes');
// const searchRouter = require('./routes/search.routes');
// const notificationsRouter = require("./routes/notifications.routes");

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/search', searchRouter);
app.use('/notifications', notificationsRouter);

export default app;
