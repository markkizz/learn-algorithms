const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//mysql
const dotenv = require('dotenv');
const result = dotenv.config();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

if (result.error) {
    throw result.error;
}
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_KEY,
    database: process.env.DB_DATABASE
});
const db = pool.promise();

function get() {
    return new Promise((resolve, rej) => {
        let data;
        db.execute('SELECT MAX(post_id) as lastId FROM post').then(result => {
            data = result[0][0].lastId;
            resolve(data);
        }).catch(err => rej(err));
    });
}

let temp;
async function awaits() {
    temp = await get();
    console.log(temp);
}

awaits();
