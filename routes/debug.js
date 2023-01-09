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
 * @param {object} req - HTTP Request object
 * @param {object} req - HTTP Response object
 */
 router.get('/', (req, res) => {
    // Route specific logic goes here

    const reply = model.HelloWorld();

    res.status(200)
    res.send(reply)
})

/**
 *  DBQueryTestSelect
 * 
 * @description Hello world
 * @param {object} req - HTTP Request object
 * @param {object} req - HTTP Response object
 */
 router.get('/db', async (req, res) => {
    
    console.log("Waiting on model")
    const data = await model.DBQueryTestSelect()

    if (data) {
        res.status(200)
        res.send(data)
    }else{
        res.status(500)
        res.send("Debug db query failed")
    }
})


module.exports = router;