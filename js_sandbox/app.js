// // VAR, LET and CONST 

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

// // PRIMITIVE DATA TYPES ===================================================
// // strings, numbers, boolean, null, undefined and symbols (es6)

// // Reference data/types objects
// //arrays, object literal, functions, dates and anything else...

// // PRIMITIVE TYPES
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

// //REFERENCE TYPES - objects  ==============================================
// const hobbies = ['movies', 'surf'];
// // object literal 
// const address = {
//     city: 'Guarulhos',
//     state: 'SP'
// }

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// // TYPE CONVERSION ========================================================

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

// STRINGS AND CONCATENATION =================================================
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

// TEMPLATE LITERALS =========================================================
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

// // ARRAYS AND ARRAYS METHODS ==============================================
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
// 

//DATE & TIMES ===============================================================
// let val;

// const today = new Date();// current time
// let birthday = new Date('03-10-1990 14:00');
// birthday = new Date('03/10/1990 14:00');
// val = today.getMonth();// 7 or the current month today
// val = today.getDate();// takes the day mumber as 3 or 27
// val = today.getFullYear();//2020
// val = today.getHours();
// val = today.getMinutes();
// val = today.getTime();
// console.log(val);

//IF STATEMENT AND COMPARASION OPERATORS =====================================
//example
// if(something){
//     do something
// }else{
//     do something else
// }

// const id = '100';
// equal to 
// if(id == 100){
//     console.log('CORRECT');//correct
// }else{
//     console.log('INCORRECT'); 
// }

// // not equal to 
// if(id != 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT'); // incorrect
// }

// // equal to value & type
// // equal to 
// if(id === 100){// not the same type because this 100 is a number and id is a string
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT'); 
// }

// // not equal to value & type
// // equal to 
// if(id !== 100){// correct since they are different in type
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT'); 
// }

// test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }else{
//     console.log('No ID.')
// }

// Greater and less than 
// if(id > 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT'); 
// }

// const color = 'yellow';
// if (color === 'red'){
//     console.log('Color is red');
// }else if (color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// Logical operators

// const name = 'Steve';
// const age = 20;

// // and &&
// if (age > 0 && age <12){
//     console.log(`${name} is a child`);
// }else if (age >= 13 && age <= 19){
//     console.log(`${name} is a teeager`);
// }else {
//     console.log(`${name} is an adult.`);
// }

// // Or ||

// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// }else{
//     console.log(`${name} is registered for the race`);
// }

// // ternary operator
// console.log(id === 100 ? 'correct': 'incorrect');
// // the same as "Is the id the same type of 100? correct or incorrect?"

// //without braces
// if(id === 100)
//     console.log('Correct');
// else
//     console.log('incorrect');

// SWITCHES ==================================================================

// const color = 'red';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or bue');
//         break;
// }

// // will get the actual day and send to template literail
// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS AND EXPRESSIONS =====================================

// function greet(){
//     console.log('Hello');
// }

// greet();

// // using parameters
// function greet(firstName, lastName){
//     return 'Hello ' + firstName + lastName;
// }
// console.log(greet('John ', 'Prado'));

// // if the parameters are empty there will not have  default value
// // so lets define a default name for the parameters
// function greet(firstName = 'John ', lastName = 'Prado'){
//     return 'Hello ' + firstName + lastName;
// }
// console.log(greet());//Hello John Prado

// // FUNCTION EXPRESSIONS 
// const square = function(x){
//     return x * x;
// }; // ';' because it is a variable

// console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran.. weird stuff going on here.. ');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Elias');// Hello Elias

// PROPERTY METHODS
// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(){
//         console.log(`Edit todo ${edit}`)
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo..');
// }

// todo.add();
// todo.edit(22);

// GENERAL LOOPs ====================================================================
// let i = 0; is the begin of the code;
// i < 10; is a condition
// i++ is an increment as same as i = i + 1 until reach the condition

// FOR LOOP
// for(let i = 0; i < 10; i++){
//     console.log(i);//0 1 2 3 4 5 6 7 8 9
// }

// Add a conditional into a specific number
// the result of this loop is 0 1 2 3 4 5 6 7 is my favorite number 8 9
// 

// for(let i = 0; i < 10; i++){
//     if(i === 7){
//         console.log('7 is my favorite number');
//         continue;// will tell the loop to continue to the next iteration
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;// will break the loop at the numer 5
//     }

//     console.log(i);// will continue the loop
// }

// WHILE LOOP 
// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

// DO WHILE loop

// let i = 0;

// do {
//     console.log('Number ' + i)
//     i++;
// }
// while(i < 10);

// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Mustang', 'Mercedes', 'Volks', 'BMW'];

// for(i = 0; i < cars.length; i++){
//     // will not work as cars.i;
//     console.log(cars[i]);
// }

// forEach() loop
/*
Foreach loop (or for each loop) is a control flow statement 
for traversing items in a collection. 
Foreach is usually used in place of a standard for loop statement. 
Unlike other for loop constructs,
however, foreach loops[1] usually maintain no explicit counter: 
they essentially say "do this to everything in this set", 
rather than "do this x times".
*/
// cars.forEach(function(car){
//     console.log(car);
// });

// for each with index
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);// usage of template literal
//     // 0 : Ford, 1 : Mustang ....
// });

// map() method to loop items in an object **
// object
// const users = [
//     {id:1, name:'John'},
//     {id:2, name:'Mary'},
//     {id:3, name:'Karen'},
//     {id:4, name:'Peter'},
// ];

/*
map() takes each element from an original array, 
transforms it with a function that you specify, 
and adds the result to a new array in the same order.

Sure, you could use a for loop to do this. 
But using map() will allow you to write less code
 and make your code more readable.
*/
// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);// [1,2,3,4]

// FOR IN loop ** (same as python)
// const user = {
//     firstName = 'John',
//     lastName = 'Doe',
//     age: 40,
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// WINDOW METHODS / OBJECTS / PROPRETIES =================================================

//Alert
//alert('Hello word');

// Prompt
// const input = prompt();
// alert(input);// will create an alert with an input to be added by the user and will resent that input

// Confirm

// if (confirm('Are you sure')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }// cancel = NO, submit = YES

// let val;

// // outter height and width
// val = window.outerHeight;// (counting everything) takes the height of the monitor..
// val = window.outerWidth;// (counting everything) takes the widht of the monitor..

// // inner height and width
// val = window.innerHeight;// (only the inner web page) takes the height of the monitor..
// val = window.innerWidth;// (only the inner web page) takes the widht of the monitor..

// // scroll points
// val = window.scrollY;// for animation 
// val = window.screenX;

// // location object
// val = window.location;// shows the hostname, port and so on..
// val = window.location.hostname;// 127.0.0.1
// val = window.location.port;// 5500
// val = window.location.href;// https://www.domain....
// val = window.location.search;// adds the url search patterns..

// // redirect
// // window.location.href = 'https://google.com';// will be redirected to google

// // reload
// // window.location.reload(); // will keep reloading

// // history object
// // window.history.go(-2);// goes to the number value of your web history
// // val = window.history.length;// will give the amount of history in your browser history

// // navigator object
// // val = window.navigator;// tells the name of navigator, pluggings, storage...
//  val = window.navigator.appName;// Netscape
//  val = window.navigator.appVersion;// will give the version of the browser..
//  val = window.navigator.userAgent;
//  val = window.navigator.platform;//MacIntel.... win32..
//  val = window.navigator.vendor; // Google Inc
//  val = window.navigator.language; // en-GB

// console.log(val);

// BLOCK SCOPE WITH LET AND CONST ==========================================================

// Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// // function test(){
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('Function scope: ', a, b, c);
// // }

// // test();// Function scope:  4 5 6
// // console.log('Global scope: ', a, b, c);//Global scope:  1 2 3

// // with conditional
// // if(true){
// //     //block scope
// //     var a = 4;// overrided the first var = 1; above
// //     let b = 5;
// //     const c = 6;
// //     console.log('If/block scope: ', a, b, c);
// // }

// // // the if/block scope result: If/block scope:  4 5 6
// // console.log('Global scope: ', a, b, c);//Global scope:  4 2 3

// // with for loop
// for(let a = 0; a < 10; a++){
//     //if use var instead of let the global var 'a' will become 10
//     console.log(`loop: ${a}`);
// }

// console.log('Global scope: ', a, b, c);