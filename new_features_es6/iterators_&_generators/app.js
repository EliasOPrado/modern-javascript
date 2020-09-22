// // iterator example
// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ?
//             {value: names[nextIndex++], done: false} :
//             {done: true}
//         }
//     }
// }

// // create a array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // initi iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next()); // gives the real value
// console.log(names.next().value );

// // generator example
// function* sayNames(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'Jhon';
// }

// const name  = sayNames();

// console.log(name.next());// {value: "Jack", done: false}
// console.log(name.next().value); // Jill 
// console.log(name.next().value); // Jhon
// console.log(name.next().value); // undefined

// ID creator
function* createIds(){
    let index = 0;

    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);//0
console.log(gen.next().value);//1
console.log(gen.next().value);//2 ...