const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//var arr = ["aaa", "bbb", "ccc"];
var arr = ["aaa", "bbb"];
for (var i = 0; i<arr.length; i++) console.log((i+1) + ". " + arr[i]);

rl.question("\n추가할 단어를 입력하세요 : ", (str) => {
    if (arr.length >= 3) {
        console.log("최대 단어는 3개까지 입력할 수 있습니다.");
    } else {
        arr.push(str);
    }

    for (var i = 0; i<arr.length; i++) console.log((i+1) + ". " + arr[i]);
    rl.close();
});