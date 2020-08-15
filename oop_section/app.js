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
