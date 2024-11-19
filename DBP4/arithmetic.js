const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    rl.question("? ", (str) => {
        const [str1, str2] = str.split(/[\+\-\*\/]/);
        num1 = parseInt(str1);
        num2 = parseInt(str2);

        if(str.indexOf('+') != -1){
            console.log(num1 + num2);
        }
        else if (str.indexOf('-') != -1) {
            console.log(num1 - num2);
        }
        else if (str.indexOf('*') != -1) {
            console.log(num1 * num2);
        }
        else if (str.indexOf('/') != -1) {
            if (num2 == 0) console.log('0으로 나눌 수 없습니다.');
            else console.log(num1 / num2);
        }

        main();
    });
};

main();