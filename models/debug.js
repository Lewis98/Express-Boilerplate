/**
 * Debug logic module
 * 
 * @module models/debug
 * @author Lewis Stokes
 * @changelog
 */

const db = require('../helpers/database');


/**
 *  HelloWorld
 * 
 * @description Returns "Hello world"
 */
module.exports.HelloWorld = ()=>{

    // Model logic goes here

    return("Hello World");
}



/**
 *  DBQueryTestSelect
 * 
 * @description "Tests database helper select logic"
 */
module.exports.DBQueryTestSelect = async ()=>{

    result = null;

    try {
        console.log("Waiting on db helper")
        result = await db.get("SELECT * FROM tblDebug WHERE id = ?", [1,5,6,3])
        console.log(`GOT :`)
        console.table(result)
    } catch (e) {
        console.error(`Error : '${e}'`)
    }

    return(result);
}