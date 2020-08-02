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

//LET
//assigning name 
// let name;
// name = 'John';
// console.log(name);
// //reassigning the var name
// name = 'Steve Smith';
// console.log(name);

//CONST
// const name = 'John';
// console.log(name);
// Can not reasign
// name = 'Sara';
// Have to assign a value or a error will be thrown
// const greetings;

// Const can not be changed, only its inner instances:
const person = {
    name: 'Sara',
    age: 32
}
//reasigning person name ex:
person.name = 'John';
person.age = 29;
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
