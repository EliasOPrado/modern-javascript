// MAPS = key-values pairs - can use ANY tyoe as key a key or value

const map1 = new Map();

// set keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){}
   // key = value

// set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values by keys
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // count values
// console.log(map1.size);

// iterating through maps

// loop using for ...of to get keys and values
// for(let [key, value] of map1){
//     console.log(`${key} = ${value}`);
// }

/*
result below:

some string = value of key1
[object Object] = value of key2
function(){} = value of key3
*/

// iterate keys only
for(let key of map1.keys()){
    console.log(key);
}

/*
result below:

some string
{}
ƒ (){}
*/

// irerate values only
for(let value of map1.values()){
    console.log(value);
}


/*
result below:

value of key1
value of key2
value of key3
*/

//using forEach()
map1.forEach(function(key, value){
    console.log(`${key} = ${value}`);
})