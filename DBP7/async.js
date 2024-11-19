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

function askInput1() {
    askQuestion('단어를 입력하세요 (종료 : exit) : ').then((input) => {
        if (input == 'exit') {
            rl.close();
        }
        else {
            askInput1();
        }
    });
}

async function askInput2() {
    const input = await askQuestion('단어를 입력하세요 (종료 : exit) : ');
    if (input == 'exit') {
        rl.close();
    }
    else {
        await askInput2();
    }
}

askInput2();