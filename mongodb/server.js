const express = require("express");
var mysql = require("mysql2");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "myboard",
});

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(8080, function () {
    console.log("포트 8080으로 서버 대기중 ... ")
});
conn.connect();

app.get('/enter', function (req, res) {
    res.sendFile(__dirname + '/enter.html')
});

app.post('/save', function (req, res) {
    console.log(req.body);
    console.log("저장완료");
});