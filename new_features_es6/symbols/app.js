// create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym2); // will display "Symbol(sym2)" in the console
// console.log(typeof sym2); // symbol

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.Key3 = 'prop3';
myObj.Key4 = 'prop4';

// console.log(myObj[KEY1]);// prop1 
// console.log(myObj[KEY2]);// prop2

// // Symbols are not enumerable in for ...in <<<<
// for(let i in myObj) {
//     // symbols dont appear in "in" loops ?????
//     console.log(`${i}: ${myObj[i]}`);
// }

// symbos are ignore bt JSON.stringfy
console.log(JSON.stringify({key: 'props'})); // {"key":"props"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // {}
