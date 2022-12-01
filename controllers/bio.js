const express = require('express');
const cors = require('cors');
const router = express.Router();
const { bio } = require('../models');

// microservices
router.use(cors());
router.use(express.json());

// ---- CRUD ----
// -- CREATE BIO --
async function add (req, res) {
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
}

// -- READ BIO --
async function list (req, res) {
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
}

// -- READ BIO BY ID --
async function getById (req, res) {
    let response = {}
    try {
        response = await bio.findOne({where: {id: req.params.id}})
    } catch (e) {
        console.log(e.message)
        response.error = e.message
        res.status(401)
    }

    res.json(response)
}

// -- UPDATE BIO BY ID --
async function update (req, res) {
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
}

// -- DELETE BIO BY ID --
async function remove (req, res) {
    try {
        await bio.destroy({
            where: {id: req.params.id}
        })
    } catch (e) {
        console.log(e.message)
    }

    res.end()
}


module.exports = {
    router,
    add,
    getById,
    list,
    update,
    remove
}


