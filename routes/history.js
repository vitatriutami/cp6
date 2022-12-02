const { render } = require("ejs")
const express = require('express');
const router = express.Router();
const cors = require("cors");

// microservices
router.use(cors());
router.use(express.json());

// ---- GET HISTORY LISTING ----
// List view
router.get("/", (req, res) => {
    res.render("history/list")
})
// Form add new
router.get("/form", (req, res) => {
    res.render("history/form", { id: null })
})
// Form edit
router.get("/form/:id", (req, res) => {
    res.render("history/form", { id: req.params.id })
})
// Detail view
router.get("/:id", (req, res) => {
    res.render("history/detail", {
        id: req.params.id
    })
})

/*
// ---- GET SESSION LISTING ----
// ---- GET session API listing ----
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

