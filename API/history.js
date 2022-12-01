const express = require("express")
const router = express.Router()
const cors = require("cors")
const { history } = require("../models")

router.use(cors())
router.use(express.json())

// microservices
router.use(cors());
router.use(express.json());

// ---- CRUD ----
// -- CREATE history --
router.post("/history", async  (req, res) => {
    try {
        await history.create({
            score: req.body.score,
            level: req.body.level,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    } catch (e) {
        console.log(e)
        console.log(e.message)
    }

    res.end()
})

// -- READ history --
router.get("/historygame", async (req, res) => {
    let response = []
    try {
        response = await history.findAll({
            include: [
                {
                    model: history,
                    as: "history"
                }
            ]
        })
    } catch (e) {
        console.log(e.message)
    }

    res.json(response)
})

// -- READ history BY ID --
router.get("/historygame/:id", async (req, res) => {
    let response = {}
    try {
        response = await history.findOne({where: {id: req.params.id}})
    } catch (e) {
        console.log(e.message)
        response.error = e.message
        res.status(401)
    }

    res.json(response)
})

// -- UPDATE history BY ID --
router.put("/historygame/:id", async (req, res) => {
    try {
        await history.update({
            score: req.body.score,
            level: req.body.level,
        }, {
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})

// -- DELETE history BY ID --
router.delete("/articles/:id", async (req, res) => {
    try {
        await history.destroy({
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})

module.exports = router