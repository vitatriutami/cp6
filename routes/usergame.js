const { render } = require("ejs")
const express = require('express');
const router = express.Router();
const cors = require("cors");

// microservices
router.use(cors());
router.use(express.json());

// ---- GET usergame listing ----
// List view
router.get("/", (req, res) => {
  res.render("usergame/list")
})
// Form add new
router.get("/form", (req, res) => {
  res.render("usergame/form", { id: null })
})
// Form edit
router.get("/form/:id", (req, res) => {
  res.render("usergame/form", { id: req.params.id })
})
// Detail view
router.get("/:id", (req, res) => {
  res.render("usergame/detail", {
      id: req.params.id
  })
})


module.exports = router;
