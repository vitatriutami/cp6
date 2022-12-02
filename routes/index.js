const { render } = require("ejs")
const express = require('express');
const router = express.Router();


/* GET homepage game. */
router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router;
