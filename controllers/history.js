const express = require('express');
const cors = require('cors');
const router = express.Router();
const { history } = require('../models');

// microservices
router.use(cors());
router.use(express.json());

// ---- CRUD ----
// -- CREATE history --
async function add (req, res) {
    try {
        await history.create({
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
}

// -- READ history --
async function list (req, res) {
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
}

// -- READ history BY ID --
async function getById (req, res) {
    let response = {}
    try {
        response = await history.findOne({where: {id: req.params.id}})
    } catch (e) {
        console.log(e.message)
        response.error = e.message
        res.status(401)
    }

    res.json(response)
}

// -- UPDATE HISTORY BY ID --
async function update (req, res) {
    try {
        await history.update({
            score: req.body.score,
            levelname: req.body.level,
        }, {
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
}

// -- DELETE HISTORY BY ID --
async function remove (req, res) {
    try {
        await history.destroy({
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
}


module.exports = {
    add,
    getById,
    list,
    update,
    remove
}


