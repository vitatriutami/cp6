const { render } = require("ejs")
const express = require('express');
const router = express.Router();

// microservices
router.use(cors());
router.use(express.json());

// ---- GET BIO LISTING ----
// List view
router.get("/", (req, res) => {
    res.render("bio/list")
})
// Form add new
router.get("/form", (req, res) => {
    res.render("bio/form", { id: null })
})
// Form edit
router.get("/form/:id", (req, res) => {
    res.render("bio/form", { id: req.params.id })
})
// Detail view
router.get("/:id", (req, res) => {
    res.render("bio/detail", {
        id: req.params.id
    })
})

module.exports = router;