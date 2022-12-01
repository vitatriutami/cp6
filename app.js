const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
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

// app
app.use("/api/v1", usergame);
app.use("/api/v1", bio);
app.use("/api/v1", history);


/* GET homepage game. */
app.get("/", (req, res) => {
    res.render("index")
})


// ---- GET USERGAME LISTING ----
// List view
app.get("/usergame", (req, res) => {
    res.render("usergame/list")
})
// Form add new
app.get("/usergame/form", (req, res) => {
    res.render("usergame/form", { id: null })
})
// Form edit
app.get("/usergame/form/:id", (req, res) => {
    res.render("usergame/form", { id: req.params.id })
})
// Detail view
app.get("/usergame/:id", (req, res) => {
    res.render("usergame/detail", {
    id: req.params.id})
})


// ---- GET BIO API LISTING ----
// List view
app.get("/bio", (req, res) => {
    res.render("bio/list")
})
// Form add new
app.get("/bio/form", (req, res) => {
    res.render("bio/form", { id: null })
})
// Form edit
app.get("/bio/form/:id", (req, res) => {
    res.render("bio/form", { id: req.params.id })
})
// Detail view
app.get("/bio/:id", (req, res) => {
    res.render("bio/detail", {
        id: req.params.id
    })
})


// ---- GET HISTORY LISTING ----
// List view
app.get("/history", (req, res) => {
    res.render("history/list")
})
// Form add new
app.get("/history/form", (req, res) => {
    res.render("history/form", { id: null })
})
// Form edit
app.get("/history/form/:id", (req, res) => {
    res.render("history/form", { id: req.params.id })
})
// Detail view
app.get("/history/:id", (req, res) => {
    res.render("history/detail", {
        id: req.params.id
    })
})

/*
// ---- GET SESSION API LISTING ----
// ---- GET usergame API listing ----
app.get('/api/session', sessionController.list);
app.get('/api/session/:id', sessionController.getById);
app.post('/api/session', sessionController.add);
app.put('/api/session/:id', sessionController.update);
app.delete('/api/session', sessionController.remove);
// List view
app.get("/session", (req, res) => {
  res.render("session/list")
})
// Form add new
app.get("/session/form", (req, res) => {
  res.render("session/form", { id: null })
})
// Form edit
app.get("/session/form/:id", (req, res) => {
  res.render("session/form", { id: req.params.id })
})
// Detail view
app.get("/session/:id", (req, res) => {
  res.render("session/detail", {
      id: req.params.id
  })
})
*/

app.listen(3000, () => console.log(`Server running on port 3000`));
 