const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log("포트 8080으로 서버 대기중 ... ");
});

app.get('/', function(req, res) {
    // res.send('홈입니다.<br><b>볼드체</b>');
    res.sendFile(__dirname + '/navbar.html');
});

app.get('/book', function(req, res) {
    res.send('도서목록 페이지');
});