/**
 * Database connector module
 * 
 * @module helpers/database
 * @author Lewis Stokes
 * @changelog
 */

//const sqlite3 = require('sqlite3').verbose()

/*
const db = new sqlite3.Database('debug.db', (err) => {
    if (err) {
        console.error(err.message);
    }else{
        console.log('Connected to database');
    }
});
*/


/**
 *  Read query 
 * 
 * @description Function for database read
 * @param {object} query - Database query
 * @param {object} data - Data for query
 */
module.exports.get = async (query, data) => {
    try {
        
        // Database query logic here

        console.log(`Database query '${query}' \nExecuted with data :`)
        console.table(data)
        
        return {
            id : 1,
            name : "debug",
            data : [5, 7, 9]
        }
        
    } catch (err) {
        console.log(err)        
    }
}