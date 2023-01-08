const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('../debug/debug.db', (err) => {
    if (err) {
        console.error(err.message);
    }else{
        console.log('Connected to database');
    }
});


module.exports.get = async (query, data) => {
    try {

        await db.open('./activart.db');

        const result = await db.all(query, data)    
        

        await db.close();

        return result
        
    } catch (err) {
        console.log(err)        
    }
}