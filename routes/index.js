const { render } = require("ejs")
const express = require('express');
const router = express.Router();

// microservices
router.use(cors());
router.use(express.json());

/* GET homepage game. */
router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router;
