const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('첫번째값 : ', (x) => {
    var sum = 0;
    sum += parseInt(x);

    rl.question('두번째값 : ', (y) => {
        sum += parseInt(y);
        console.log(`두 수의 합은 ${sum}입니다.`);
        rl.close();
    });
});