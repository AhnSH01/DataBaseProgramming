const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = [];

function menu() {
    var tmp = 0;

    rl.question("? ", (str) => {
        const [str1, str2] = str.split(' ');
        if(str2) var num = parseInt(str2);

        if (str1 == 'add') {
            if (num) {
                arr.push(num);
                for (var i = 0; i<arr.length; i++) console.log(arr[i]);
            }
            else {
                console.log("ADD할 숫자를 입력해주세요.");
            }
        }
        else if (str1 == 'remove') {
            if (num) {
                arr.splice(arr.indexOf(num), 1);
            }
            else {
                console.log("해당 숫자가 존재하지 않습니다.");
            }
            for (var i = 0; i<arr.length; i++) console.log(arr[i]);
        }
        else if (str1 == 'sum') {
            for (var i = 0; i<arr.length; i++) {
                tmp += arr[i];
            }
            console.log(tmp);
        }
        else if (str1 == 'avg') {
            for (var i = 0; i<arr.length; i++) {
                tmp += arr[i];
            }
            console.log(tmp/arr.length);
        }
        else {
            console.log("존재하지않는 명령어입니다.");
        }

        console.log();
        menu();
    });
}

menu();