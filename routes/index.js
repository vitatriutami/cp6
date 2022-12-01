const express = require('express');
const router = express.Router();

const usergameController = require('../controllers/usergame');
const bioController = require('../controllers/bio');
const historyController = require('../controllers/history');

/*
const sessionController = require('../controllers/session');
*/

/* GET homepage game. */
router.get("/", (req, res) => {
  res.render("index")
})

// ---- GET usergame API listing ----
router.get('/api/usergame', usergameController.list);
router.get('/api/usergame/:id', usergameController.getById);
router.post('/api/usergame', usergameController.add);
router.put('/api/usergame/:id', usergameController.update);
router.delete('/api/usergame', usergameController.remove);
// List view
router.get("/usergame", (req, res) => {
  res.render("usergame/list")
})
// Form add new
router.get("/usergame/form", (req, res) => {
  res.render("usergame/form", { id: null })
})
// Form edit
router.get("/usergame/form/:id", (req, res) => {
  res.render("usergame/form", { id: req.params.id })
})
// Detail view
router.get("/usergame/:id", (req, res) => {
  res.render("usergame/detail", {
      id: req.params.id
  })
})


// ---- GET BIO API LISTING ----
// ---- GET usergame API listing ----
router.get('/api/bio', bioController.list);
router.get('/api/bio/:id', bioController.getById);
router.post('/api/bio', bioController.add);
router.put('/api/bio/:id', bioController.update);
router.delete('/api/bio', bioController.remove);
// List view
router.get("/bio", (req, res) => {
  res.render("bio/list")
})
// Form add new
router.get("/bio/form", (req, res) => {
  res.render("bio/form", { id: null })
})
// Form edit
router.get("/bio/form/:id", (req, res) => {
  res.render("bio/form", { id: req.params.id })
})
// Detail view
router.get("/bio/:id", (req, res) => {
  res.render("bio/detail", {
      id: req.params.id
  })
})


// ---- GET HISTORY API LISTING ----
// ---- GET usergame API listing ----
router.get('/api/history', historyController.list);
router.get('/api/history/:id', historyController.getById);
router.post('/api/history', historyController.add);
router.put('/api/history/:id', historyController.update);
router.delete('/api/history', historyController.remove);
// List view
router.get("/history", (req, res) => {
  res.render("history/list")
})
// Form add new
router.get("/history/form", (req, res) => {
  res.render("history/form", { id: null })
})
// Form edit
router.get("/history/form/:id", (req, res) => {
  res.render("history/form", { id: req.params.id })
})
// Detail view
router.get("/history/:id", (req, res) => {
  res.render("history/detail", {
      id: req.params.id
  })
})

/*
// ---- GET SESSION API LISTING ----
// ---- GET usergame API listing ----
router.get('/api/session', sessionController.list);
router.get('/api/session/:id', sessionController.getById);
router.post('/api/session', sessionController.add);
router.put('/api/session/:id', sessionController.update);
router.delete('/api/session', sessionController.remove);
// List view
router.get("/session", (req, res) => {
  res.render("session/list")
})
// Form add new
router.get("/session/form", (req, res) => {
  res.render("session/form", { id: null })
})
// Form edit
router.get("/session/form/:id", (req, res) => {
  res.render("session/form", { id: req.params.id })
})
// Detail view
router.get("/session/:id", (req, res) => {
  res.render("session/detail", {
      id: req.params.id
  })
})
*/

module.exports = router;
