var mysql = require('mysql2');
const express = require('express');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "rental"
});
conn.connect();

const app = express();

app.listen(8080, function () {
    console.log("포트 8080으로 서버 대기중 ... ")
});

app.get('/delaylist', (req, res) => {
    const { date } = req.query;

    const convertDate = new Date(
        date.substring(0, 4),
        date.substring(4, 6) - 1,
        date.substring(6, 8),
        "09"
    );

    console.log(convertDate);

    const criteriaDate = new Date(convertDate);
    criteriaDate.setDate(criteriaDate.getDate() - 7);

    conn.query('select * from rental', (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }

        var filterResult = result.filter(row => {
            // const rental_date = new Date(
            //     row.rental_date.substring(0, 4),
            //     row.rental_date.substring(5, 7) - 1,
            //     row.rental_date.substring(8, 10),
            // );
            
            row.rental_date.setHours(row.rental_date.getHours() + 9);
            return row.rental_date < criteriaDate && row.return_date == null;
        });

        res.send(filterResult);
    });
})


// 과제 API : 반납일이 연체된 책 조회 (반납일은 대여일로부터 7일)
app.get('/mydelaylist', (req, res) => {
    const { date } = req.query;
    var tmp;

    // 쿼리로 date 값 들어왔으면 date 기준, 안들어왔으면 오늘 날짜 기준
    if (!date) {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        tmp = `${year}-${month}-${day}`;
    } else {
        tmp = date;
    }

    var query = `select * from rental 
                where rental_date < DATE_SUB('${tmp}', INTERVAL 7 DAY) 
                and return_date is null`;
    // date 값 사이에 - 안넣고 그냥 YYYYMMDD로 넣어도 알아서 파싱해줌
    // {"DATE_SUB('20241027', INTERVAL 7 DAY)":"2024-10-20"}

    conn.query(query, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.send(result);
    });
})

app.get('/list', (req, res) => {
    const { title, author, isbn } = req.query;

    var query;

    if (title) query = `select * from book where title like '%${title}%'`;
    else if (author) query = `select * from book where author like '${author}%'`;
    else if (isbn) query = `select * from book where isbn like '${isbn}%'`;

    conn.query(query, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }

        res.send(result);
    });
})

app.get('/rentallist', async (req, res) => {
    const { notreturned = 'true', onlycount = 'false' } = req.query;

    if (notreturned == 'true') {
        if (onlycount == 'true') {
            var query = `select count(rental_id) from rental 
                        left join book on rental.book_id = book.book_id
                        left join rental_user on rental.rental_user_id = rental_user.rental_user_id
                        where return_date is null`;
        }
        else {
            var query = `select rental_id, title, rental_date, return_date, 
                        rental.rental_user_id, rental_user_name from rental 
                        left join book on rental.book_id = book.book_id
                        left join rental_user on rental.rental_user_id = rental_user.rental_user_id
                        where return_date is null`;
        }

        conn.query(query, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            }

            res.send(result);
        });
    }
})

app.get('/rental', (req, res) => {
    const { book_id, rental_user_id } = req.query;

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const yyyymmdd = `${year}-${month}-${day}`;

    var query1 = `insert into rental values (0, ${book_id}, '${yyyymmdd}', null, ${rental_user_id})`;
    conn.query(query1, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }

        res.send(result);
    });
})

app.get('/return', (req, res) => {
    const { rental_id } = req.query;

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const yyyymmdd = `${year}-${month}-${day}`;

    var query1 = `update rental set return_date = '${yyyymmdd}' where rental_id = ${rental_id}`;
    conn.query(query1, (err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }

        res.send(result);
    });
})