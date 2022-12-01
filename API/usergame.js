const express = require("express")
const router = express.Router()
const cors = require("cors")
const { user } = require("../models")

router.use(cors())
router.use(express.json())

// microservices
router.use(cors());
router.use(express.json());

// ---- CRUD ----
// -- CREATE USER --
router.post("/usergame", async  (req, res) => {
    try {
        await user.create({
            password: req.body.password,
            username: req.body.username,
            bioId: req.body.bioId,
            historyId: req.body.historyId,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    } catch (e) {
        console.log(e)
        console.log(e.message)
    }

    res.end()
})

// -- READ USER --
router.get("/usergame", async (req, res) => {
    let response = []
    try {
        response = await user.findAll({
            include: [
                {
                    model: user,
                    as: "user"
                }
            ]
        })
    } catch (e) {
        console.log(e.message)
    }

    res.json(response)
})

// -- READ USER BY ID --
router.get("/usergame/:id", async (req, res) => {
    let response = {}
    try {
        response = await user.findOne({where: {id: req.params.id}})
    } catch (e) {
        console.log(e.message)
        response.error = e.message
        res.status(401)
    }

    res.json(response)
})

// -- UPDATE USER BY ID --
router.put("/usergame/:id", async (req, res) => {
    try {
        await user.update({
            password: req.body.password,
            username: req.body.username,
            bioId: req.body.bioId,
            historyId: req.body.historyId,
        }, {
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})

// -- DELETE USER BY ID --
router.delete("/articles/:id", async (req, res) => {
    try {
        await user.destroy({
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})

module.exports = router