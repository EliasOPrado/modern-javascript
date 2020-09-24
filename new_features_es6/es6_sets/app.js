// SETS - store unique values of any type

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);

// console.log(set1);

/*
Set(4) {100, "A string", {…}, true}
[[Entries]]
0: 100
1: "A string"
2: Object
3: true
size: 4
*/

const set2 = new Set([1, true, 'string']);
// same as before

// get count
// console.log(set1.size);// 4

// console.log(set1.has(100));// true
// console.log(set1.has({name: 'John'})); //false as name: is a reference

// // delete from set

// set1.delete(100);
// console.log(set1)// will delete the value 100 within the set 

// iterating through sets

// for.. of
// for(let item of set1){
//     console.log(item)
// }

/*
100
A string
{name: "John"}
true
*/

// convert set to array
const setArr = Array.from(set1);

console.log(setArr);
// [100, "A string", {name: "John"}, true]