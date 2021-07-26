import express from 'express';
import { config } from 'dotenv';
import Database from './database';
import appRouter from './routes/router';
import { json } from 'body-parser';

config({
    path: '.env'
})

const app = express();

app.use(json())
app.use(appRouter);
const init = async () => {
    const db = Database.initDatabase();
    if (db) {
        app.listen(process.env.PORT, () => {
            console.log(`Server is runing on http://localhost:${process.env.PORT}`)
            console.log(process.env)
        })
    } else {
        console.log("ERROR IN DATABASE")
    }
}

init();