const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = ["abc", "aaa", "ddd"];
for (var i = 0; i<arr.length; i++) console.log((i+1) + ". " + arr[i]);

rl.question("\n바꾸고자 하는 문자열은? ", (index) => {
    index--;

    rl.question("문자열을 입력하시오 : ", (str) => {
        arr[index] = str;

        console.log();
        for (var i = 0; i<arr.length; i++) console.log((i+1) + ". " + arr[i]);
        
        rl.close();
    })
});