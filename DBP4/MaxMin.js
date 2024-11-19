const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var max = 0, min = 10000;

function menu() {
    rl.question("? ", (num) => {
        num = parseInt(num);

        if (num == -1) {
            console.log('max : ' + max);
            console.log('min : ' + min);
            rl.close();
            return;
        }
        else {
            if (max < num) max = num;
            if (min > num) min = num;
        }
        
        menu();
    });
};

menu();