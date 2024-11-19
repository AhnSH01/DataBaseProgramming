const mongoclient = require('mongodb').MongoClient;
const url =
    `mongodb+srv://AhnSH:1234@cluster1.mgo2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

mongoclient.connect(url)
    .then(client => {
        console.log('몽고DB 접속 성공');
    });