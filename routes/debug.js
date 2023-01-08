/**
 * Debug routes module
 * 
 * @module routes/debug
 * @author Lewis Stokes
 * @changelog
 */

const exp = require('express')
const router = new exp.Router();

const model = require('../models/debug.js');


/**
 *  HelloWorld
 * 
 * @description Hello world
 * @param {object} ctx - Context of HTTP Request
 */
 router.get('/', (req, res) => {
    // Route specific logic goes here

    const reply = model.HelloWorld();

    res.status(200)
    res.send(reply)
})

/**
 *  HelloWorld
 * 
 * @description Hello world
 * @param {object} ctx - Context of HTTP Request
 */
 router.post('/', (req, res) => {
    res.status(200)
    res.send("Post response")
})


module.exports = router;