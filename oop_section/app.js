// // object literal
// CONSTRUCTOR AND  "THIS" KEYWORD =======================
// const elias = {
//     name : 'Elias',
//     age: 30,
//     nationality: 'Brazil'
// }

// //console all object
// console.log(elias);
// // console specific item
// console.log(elias.nationality);

// // constructor method
// // Person contructor
// function Person(){
//     this.name = 'Oliver';
// }

// const oliver = new Person();
// console.log(oliver);

// Constructor with parameter
// function Person(name, dob){
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     // will bring the first instance of the Person fucntion
//     // console.log(this);
// }

// // this, in the global scope brings the Window object
// // console.log(this); //Window {...}

//  const Oliveira = new Person('Oliveira', '03-10-1990');
//  console.log(Oliveira.calculateAge());

// BUILT IN CONSTRUCTORS ===========================================

// strings
// const name1 = 'Oli';
// const name2 = new String('Oli'); // console: String {"Oli"} 0:"O", 1: "l", 2:"i"
// console.log(name2);

// console.log(typeof name1);// string
// console.log(typeof name2); // object

// if(name1 === 'Oli'){
//     console.log('YES');
// }else{
//     console.log('No');
// }

// // Number
// const num1 = 5;// number
// const num2 = new Number(5);// object

// console.log(typeof num2);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);// object

// const getSum1 = function(x, y){
//     return x + y;
// }

// getSum1(1,1);//2

// // objects
// const john1 = {name: "john"};
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Arrarys
// const arr1 = [1,2,3];
// const arr2 = new Array(1,2,3,); // both same

// // regular expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');// need to add an '\' and remove the last "/"

// console.log(re2);

// PROTOTYPES ==============================================================

// // object.prototype
// // person.prototype

// // Constructor with parameter
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
//     // will bring the first instance of the Person fucntion
//     // console.log(this);
// }

// // calculate age
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // get full name
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// // gets married ::: will change the last name of the person 
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person('john', 'Doe', '8-10-90');
// const mary = new Person('mary', 'johnson', 'March 20 1978');

// console.log(mary.getFullName());// mary johnson

// mary.getsMarried('smith');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
