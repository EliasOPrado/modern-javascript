// destructuring assignment
let a,b;
[a, b] = [100, 200];

// rest pattern will get the rest left and append to values as array 0: 1: ...
[a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);

({a,b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a,b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// // console.log(a,b);// 100 200
// console.log(rest);// {c: 300, d:400, e:500}

// // array destructuring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3); //John Beth Mike

// parse array returned from function
function getPeople(){
    return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3); //John Beth Mike

// object destructuring

const person = {
    name: 'Jphn doe',
    age: 32,
    city: 'miami',
    gender: 'male'
}

// old es5 
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// new es6

const {name, age, city} = person; // << cleaner

console.log(name, age, city);