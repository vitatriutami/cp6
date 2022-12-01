const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usergame = require("./API/usergame")
const bio = require("./API/bio")
const history = require("./API/history")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTER
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/v1", usergame);
app.use("/api/v1", bio);
app.use("/api/v1", history);

app.listen(3000, () => console.log(`Server running on port 3000`));

module.exports = app;
