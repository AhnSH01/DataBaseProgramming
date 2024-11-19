const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = [];
var size = 0;

function menu() {
    rl.question("명령어를 입력하시오 : ", (str) => {
        const [str1, str2, str3] = str.split(' ');

        if (str1 == 'add') {
            if (arr.length < size) {
                arr.push(str2);
            }
            else {
                console.log('최대갯수를 초과하였습니다.');
            }
        }
        else if (str1 == 'delete') {
            if (str2) {
                arr.splice(arr.indexOf(str2), 1);
            }
            else {
                arr.pop();
            }
        }
        else if (str1 == 'replace') {
            var i = arr.indexOf(str2);
            if (i != -1) {
                // arr[i] = str3;
                arr = arr.map(item => item == a2 ? a3 : item);
            }
        }
        else if (str1 == 'view') {
            for (var i = 0; i<arr.length; i++) console.log((i+1) + ". " + arr[i]);
        }
        else if (str1 == 'set') {
            size = parseInt(str2);
        }
        else if (str1 == 'exit') {
            rl.close();
            return;
        }

        menu();
    });
}

menu();