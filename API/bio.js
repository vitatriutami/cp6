const express = require("express")
const router = express.Router()
const cors = require("cors")
const { bio } = require("../models")

router.use(cors())
router.use(express.json())

// microservices
router.use(cors());
router.use(express.json());

// ---- CRUD ----
// -- CREATE BIO --
router.post("/bio", async  (req, res) => {
    try {
        await bio.create({
            email: req.body.email,
            fullname: req.body.fullname,
            age: req.body.age,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
    } catch (e) {
        console.log(e)
        console.log(e.message)
    }

    res.end()
})

// -- READ bio --
router.get("/biogame", async (req, res) => {
    let response = []
    try {
        response = await bio.findAll({
            include: [
                {
                    model: bio,
                    as: "bio"
                }
            ]
        })
    } catch (e) {
        console.log(e.message)
    }

    res.json(response)
})

// -- READ bio BY ID --
router.get("/biogame/:id", async (req, res) => {
    let response = {}
    try {
        response = await bio.findOne({where: {id: req.params.id}})
    } catch (e) {
        console.log(e.message)
        response.error = e.message
        res.status(401)
    }

    res.json(response)
})

// -- UPDATE bio BY ID --
router.put("/biogame/:id", async (req, res) => {
    try {
        await bio.update({
            email: req.body.email,
            fullname: req.body.fullname,
            age: req.body.age,
        }, {
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})

// -- DELETE bio BY ID --
router.delete("/articles/:id", async (req, res) => {
    try {
        await bio.destroy({
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})

module.exports = router