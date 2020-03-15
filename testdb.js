const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//mysql
const dotenv = require('dotenv');
const result = dotenv.config();
//moment
let moment = require('moment');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

if (result.error) {
    throw result.error;
}
const mysql = require('mysql');
// const mysql = require('mysql2');
// const pool = mysql.createPool({
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_KEY,
    database: process.env.DB_DATABASE
});
db.connect();


//read
app.get('/user', (req, res) => {
    let query = "select * from post p inner join users u on p.user_id = u.user_id;";
    db.query(query, (err, results) => {
        // res.send(results);
        console.log(results);

        if (err) {
            console.log(err);
        }
    });
});

// let queryAll = "select * from post p inner join users u on p.user_id = u.user_id;";
// db.query(queryAll, (err, results) => {
//     // res.send(results);
//     console.log(results[0].post_time);

//     if(err){
//         console.log(err);
//     }
// });

// async function getLastId() {
//     let queryMaxId = "SELECT MAX(post_id) as lastId FROM post";
//     let temp;

//     await db.query(queryMaxId, (err, results) => {
//         if (err) {
//             console.log(err);
//         } else {
//             temp = results;
//             console.log('temp inside await', temp[0].lastId);
//             console.log(results[0]['lastId']);
//         }
//     });
//     // setTimeout(() => {console.log('temp outside', temp)}, 500);
//     console.log('tempoutside', temp);
// }

//use
// function getLastId() {
//     return new Promise((resolve, reject) => {
//         let queryMaxId = "SELECT MAX(post_id) as lastId FROM post";
//         db.query(queryMaxId, (err, results) => {
//             let temp;
//             if (err) {
//                 console.log(err);
//                 reject(err);
//             }
//             temp = results[0].lastId;
//             resolve(temp);
//         });
//     });
// }

//controller
async function a() {
    let temp = await getLastId();
    let re = temp + 1;
    console.log(re);
}



//date
// function getDate() {
//     return new Promise((resolve, reject) => {
//         let queryDate = "select post_time from post p inner join users u on p.user_id = u.user_id";
//         db.query(queryDate, (err, results) => {
//             let temp;
//             if (err) {
//                 console.log(err);
//                 reject(err);
//             }
//             temp = moment(results[3].post_time).fromNow();
//             // temp = results[3].post_time.toString();

//             console.log(temp);
//         });
//     });
// }
// getDate();
let objBody = {
    post_id: 6,
    privacy: 'public',
    post_time:'2019-11-13 01:00:00',
    user_id: 1
}

function post(reqBody) {
    let q = 'INSERT INTO post SET ?';
    return new Promise((resolve, reject) => {
        db.query(q, reqBody, (err, results) => {
            if(err){
                reject(err);
            }
            console.log(results);
        });
    });
}
async function b() {
    let temp = await post(objBody);

}
b();

//delete


app.listen(3000, () => console.log('run server on port 3000..'));
