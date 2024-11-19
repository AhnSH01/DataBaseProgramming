let user = {
    id : 'jamsuham',
    pw : '1234',
    name : '잠수함',
    age : 30,
};

let {pw, ...rest} = user;

console.log(pw);
console.log(rest.id);
console.log(rest.name);
console.log(rest.age);