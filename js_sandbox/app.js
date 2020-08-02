// var, let and const 

// //assigning name 
// var name = 'John';
// console.log(name);
// //reassigning the var name
// name = 'Steve Smith';
// console.log(name);

// //letter, numbers, _, $
// //Can not start with numbers

// //mult word vars
// var firstName = 'John'//camel case
// var first_name = 'Sara'//underscore
// var FirstName = 'Peter'//Pacal case (recommended on OOP)
// var firstname;// not recommended

//LET ======================
//assigning name 
// let name;
// name = 'John';
// console.log(name);
// //reassigning the var name
// name = 'Steve Smith';
// console.log(name);

//CONST ====================
// const name = 'John';
// console.log(name);
// Can not reasign
// name = 'Sara';
// Have to assign a value or a error will be thrown
// const greetings;

// Const can not be changed, only its inner instances:
// const person = {
//     name: 'Sara',
//     age: 32
// }
// //reasigning person name ex:
// person.name = 'John';
// person.age = 29;
// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

/*
In CONST I cannot reasign a variable like const name = 'John'; to name = 'Sara'.
It will throw an error. However, if I use CONST in an object or an array, I can make 
changes (mutate) with data-structure methods and concatenation.
*/

// PRIMITIVE DATA TYPES ==================
// strings, numbers, boolean, null, undefined and symbols (es6)

// Reference data/types objects
//arrays, object literal, functions, dates and anything else...

// PRIMITIVE TYPES =======================
// const name = 'john';
// console.log(typeof name);//string 

// const age = 32;
// console.log(typeof age);// number

// const hasKids = true;// booiean
// const car = null; // null (nada, vazio)

// let test;// can not be undefined with (const)
// console.log(test); //undefined

// // symbol (es6)
// const sym = Symbol();
// console.log(typeof sym);

// //REFERENCE TYPES - objects  ========
// const hobbies = ['movies', 'surf'];
// // object literal 
// const address = {
//     city: 'Guarulhos',
//     state: 'SP'
// }

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// TYPE CONVERSION =====================

let val;
// number to string 
val = 5;


// output 
console.log(val);
console.log(typeof val);
console.log(val.length);