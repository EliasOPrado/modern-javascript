// const sayHello = function(){
//     console.log('Hello');
// }
// sayHello();

// const sayHello = () => {
//     console.log('Hello');
// }

// one line funciton does not need braces
// const sayHello = () => console.log('hello');

// const sayHello = 'Hello';

//return object
// const sayHello = () => ({msg: 'Hello'});

// single param does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

//multiple params needs parenthesis
//const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

//sayHello('Elias', 'Prado');

const users = ['Nathan', 'John', 'Will'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

// using arrow function - shorter
// const nameLengths = users.map((name)=> {
//     return name.length;
// });

//using arrow function - shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);