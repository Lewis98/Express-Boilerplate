const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('debug.db', (err) => {
    if (err) {
        console.error(err.message);
    }else{
        console.log('Connected to database');
    }
});


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