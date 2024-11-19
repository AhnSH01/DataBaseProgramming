const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    })
}

var arr = [];

function add() {
    rl.question("단어 : ", (str) => {
        arr.push(str);
    })
}

async function menu() {
    console.log('1. 조회');
    console.log('2. 추가');
    console.log('3. 삭제');

    const input = await askQuestion('단어 : ');

    if (input == '1') {
        if (arr.length == 0) {
            console.log("없음");
        }
        else {
            for (var i = 0; i<arr.length; i++) console.log(arr[i]);
        }
    }
    else if (input == '2') {
        await add();
    }
    else if (input == '3') {
        rl.question("단어 : ", (str) => {
            if (str) {
                arr.splice(arr.indexOf(str), 1);
            }
            else {
                console.log("존재하지 않는 단어입니다.");
            }
        })
    }
    else {
        console.log("존재하지않는 명령어입니다.");
    }

    console.log();
    await menu();
    };

menu();