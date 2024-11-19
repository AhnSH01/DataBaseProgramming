const mysql = require('mysql2');
const express = require('express');
const app = express();

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "myboard",
});

conn.connect();

app.listen(8080, function () {
    console.log("포트 8080으로 서버 대기중 ... ")
});

app.get('/book', function (req, res) {
    res.send('도서 목록 관련 페이지입니다.');
});

app.get('/getPost', function (req, res) {
    const {title} = req.query;
    var query1 = `select * from post where title = '${title}'`;

    conn.query(query1, (err, results, fields) => {
        if(err) throw err;
        res.send(results);
    });
});

