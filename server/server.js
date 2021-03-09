
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.set("port", port);

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const projectsRouter = require("./routes/projects.routes");

// const x = app.use(express.static(__dirname + '/'), indexRouter);
// app.use(express.static(path.join(__dirname, '/')), indexRouter);
// app.use(express.static(path.join(__dirname, '/users')), usersRouter);
// app.use(express.static(path.join(__dirname, '/projects')), projectsRouter);


// app.get("/", (req, res) => {
//     console.log("hi")
// })
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);


// const path = require('path');

// var createError = require('http-errors');
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');

// const indexRouter = require("./routes/index");
// const usersRouter = require('./routes/users');

// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'ejs');

// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
