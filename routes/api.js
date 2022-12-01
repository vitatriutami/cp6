const express = require("express")
const router = express.Router()
const cors = require("cors")
const { user } = require("../models")

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
router.delete("/usergame/:id", async (req, res) => {
    try {
        await user.destroy({
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
})


// --------------------
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
router.get("/bio", async (req, res) => {
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
router.get("/bio/:id", async (req, res) => {
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
router.put("/bio/:id", async (req, res) => {
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



// --------------------
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
router.get("/history", async (req, res) => {
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
router.get("/history/:id", async (req, res) => {
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
router.put("/history/:id", async (req, res) => {
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