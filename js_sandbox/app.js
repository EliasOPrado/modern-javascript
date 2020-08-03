// // var, let and const 

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

// //LET ======================
// //assigning name 
// let name;
// name = 'John';
// console.log(name);
// //reassigning the var name
// name = 'Steve Smith';
// console.log(name);

// //CONST ====================
// const name = 'John';
// console.log(name);
// // Can not reasign
// name = 'Sara';
// // Have to assign a value or a error will be thrown
// const greetings;

// // Const can not be changed, only its inner instances:
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

// /*
// In CONST I cannot reasign a variable like const name = 'John'; to name = 'Sara'.
// It will throw an error. However, if I use CONST in an object or an array, I can make 
// changes (mutate) with data-structure methods and concatenation.
// */

// // PRIMITIVE DATA TYPES ==================
// // strings, numbers, boolean, null, undefined and symbols (es6)

// // Reference data/types objects
// //arrays, object literal, functions, dates and anything else...

// // PRIMITIVE TYPES =======================
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

// // TYPE CONVERSION =====================

// let val;
// // number to string 
// val = 5;
// val = String(4+4);// will override the last variable (val).
// /*
// if the value is put as a string it will be converted as string.
// if number as a number. (obviously). val.length is undefined as a number..
// */
// //boolean to string
// val = String(true);
// //date to string
// val = String(new Date());
// //array to string
// val = String([1,2,3,4]);

// // toString()
// //number to string
// val = (5).toString();
// //boolean to string
// val = (true).toString();

// // string to number
// val = Number('5');
// val = Number(true);// equal to 1
// val = Number(false);// equal to 0
// val = Number(null);// also equal to 0
// val = Number('hello');// NaN or not a number
// val = Number([1,2]);//NaN

// // output 
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);// only work  on strings
// console.log(val.toFixed())// gives decimal numbers e.g: val = Number('5').toFixed(2) would be 5.00

// // NUMBERS AND MATH OBJECTS
// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbers 
// val = num1 + num2;//150
// val = num1 - num2;//50
// val = num1 * num2;//5000
// val = num1 / num2;//2
// val = num1 % num2;//0 (no reminder)

// // math object
// val = Math.PI;//3.14159...
// val = Math.E;// 2.71
// val = Math.round(2.4);//2
// val = Math.ceil(2.4);//3
// val = Math.floor(2.8);//2
// val = Math.sqrt(64);//8
// val = Math.abs(-3);//3 absolute version ?
// val = Math.pow(8, 2);//64 .. same as 8**2
// val = Math.min(2,33,4,1,55,6,7,-3);//-3
// val = Math.max(2,33,4,1,55,6,7,-3);//55
// val = Math.random();// random decimal 0.5908 or 0.500 whatever number
// val = Math.random() * 20;// decimal number from 1 to 19 
// val = Math.random() * 20 + 1;// decimal number from 1 to 20
// val = Math.floor(Math.random() * 20 + 1);// full inter 1 to 20 not float

// console.log(val);

// STRINGS AND CONCATENATION ===================
// const firstName = 'Willian';
// const lastName = 'Johnson';
// age = 30;

// let val;

// val = firstName + lastName;// WilliamJohnson

// //concatenation
// val = firstName + '' + lastName;// William Johnson

// //append
// val = 'Elias';
// val += 'Prado';//EliasPrado

// val = 'Hello, my name is ' + firstName + ' and I am ' + age +  ' years old.';

// //Escaping 
// val = 'That\'s awesome, I can\'nt wait'; //scape will not brake the code

// //Lenght
// val = firstName.length;// the length of Willian is 7

// // concat()
// val = firstName.concat(' ', lastName);// William Johnson

// // change case
// val = firstName.toUpperCase();//Willian
// val = firstName.toLowerCase();//willian

// //index
// val = firstName[0];// W
// val = firstName[2];// l
// val = firstName.indexOf('l');// 2 Wi(l)lian
// val = firstName.lastIndexOf('l');// 3 Wil(l)ian

// // charAt()
// val = firstName.charAt(2)// l

// // get last char
// val = firstName.charAt(firstName.length -1); // n 

// //substring()
// val = firstName.substring(0, 4);// Will

// // slice()
// val = firstName.slice(0, 4);// Will 

// // split()
// const str = 'Hello there my name is Elias';
// const tags = 'web development, programming, tutorial';
// val = str.split(' ');// ["Hello", "there", "my", "name", "is", "Elias"]
// val = tags.split(',');// ["web development", " programming", " tutorial"]
// val = str.replace('Elias', 'Prado');// 'Hello there my name is Prado'
// console.log(val);

// TEMPLATE LITERALS ================================
// const name = 'Elias';
// const age = 30;
// const job = 'web developer';
// const city = 'Dublin';
// let html;

// // without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//      '<li>Name: ' + name + '</li>' +
//      '<li>Age: ' + age + '</li>' +
//      '<li>Job: ' + job + '</li>' +
//      '<li>City: ' + city + '</li>' +
//      '</ul>';

// function hello(){
//     return 'hello ' + name; 
// }
// // with template strings (es6)
// html = `
//    <ul>
//      <li>Name: ${name} </li>
//      <li>Age: ${age} </li>
//      <li>Job: ${job} </li>
//      <li>City: ${2 + 2} </li>
//      <li>City: ${hello()} </li>
//      <li>City: ${age > 30 ? 'Over 30' : '30'} </li>
//    <ul>
// `;

// document.body.innerHTML = html; 
// // result below in the browser:
// // Name: Elias
// // Age: 30
// // Job: web developer
// // City: Dublin

// // ARRAYS AND ARRAYS METHODS ==================================
// // create some arrays
// const numbers = [45,34,44,55,66,89];
// const numbers2 = new Array(22,33,45,66,77);//array construction
// const fruit = ['apple', 'banana', 'orange', 'pear'];
// const mixed = [22,'hello', true, undefined, null, {a:1,b:2}, new Date()];

// let val;

// // get array length
// val = numbers.length;// 6
// // check if is array
// val = Array.isArray(numbers);// true
// // get single value
// val = numbers[3];// 55
// val = numbers[0];// 45
// // insert into array
// numbers[2] = 100;//[45, 34, 100, 55, 66, 89]
// // find index of value
// val = numbers.indexOf(66); // index 4

// // Mutating arrays
// numbers.push(250);//add this value to the end of the array
// numbers.unshift(120);// add this value to the begin of the array
// numbers.pop();// take of from end
// numbers.shift();// takes value from the begin of the array
// numbers.splice(1,1);// ??
// numbers.reverse();// reverses the array

// concatenate arrays
//val = numbers.concat(numbers2);// [89, 66, 55, 100, 45, 22, 33, 45, 66, 77]

// // sort arrays
// val = fruit.sort();
// val = numbers.sort();

// // use the "compare function"
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // reverse sort 
// val = numbers.sort(function(x, y){
//     return y - x;
// });

// // find
// function under50(num){
//     return num < 50;
// };

// function over50(num){
//     return num > 50;
// };

// val = numbers.find(under50);// 45
// val = numbers.find(over50);// 55

// console.log(numbers);
// console.log(val);

// OBJECT LITERALS 
// const  person = {
//     firstName: 'Steve',
//     lastName: 'Prado',
//     age: 30,
//     email: 'steveprado@aol.com',
//     hobbies: ['music', 'games', 'sports'],
//     address: {
//         city: 'Gurulhos',
//         state: 'SP'
//     },
//     getBirthYear: function(){
//         return 2020 - this.age;
//     }
// }

// let val;

// val = person;
// // get specific value
// val = person.firstName;//Steve
// val = person['firstName'];//Steve
// val = person.age;//30
// val = person.hobbies[1];//games
// val = person.address.state;//SP
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age:30},
//     {name: 'Mike', age:20},
//     {name: 'Nanci', age:25}
// ];

// for(let i =0; i < people.length; i++){
//     console.log(people[i].name);
// }// John //Mike// Nanci