/**
 * Index module
 * 
 * @module index
 * @author Lewis Stokes
 * @changelog
 */

const express = require('express');
const app = new express();


const port = process.env.PORT || 3000;

/* - - - - Routes - - - - */
const debug = require('./routes/debug.js');
app.use(debug);



app.listen(3000, ()=>{
    console.log("Listening on PORT : " + port);
});