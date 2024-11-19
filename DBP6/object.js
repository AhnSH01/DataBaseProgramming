const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

rl.question("찾을 단어를 입력하세요 : ", (key) => {
    let word = key;
    if (dic[word]) console.log(dic[word]);

    rl.close();
});