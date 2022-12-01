const express = require('express');
const router = express.Router();

/* GET homepage game. */
router.get("/", (req, res) => {
  res.render("index")
})


// ---- GET USERGAME LISTING ----
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


// ---- GET HISTORY LISTING ----
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
