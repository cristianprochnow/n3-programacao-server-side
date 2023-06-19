import app from './app.js';

async () => {
    const database = require ('./db');
    
    try 
    {
        const result = await database.sync();
        console.log(result);
    }
    catch (error)
    {
        console.log(error);
    }
}