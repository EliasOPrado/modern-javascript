
// let re;  //(will be used globally in this exercise)
// re = /hello/;
// re = /hello/i;// i = case insensitive
// re = /hello/g;// g = Global search

// console.log(re);

// // disregard slashes
// console.log(re.source);

// // exec() - return result in an array or null

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
// const result = re.test('hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() - returns index of the first mathc if not found resut -1
// const str = 'Hello There';
// const result = str.search(re);// returns 0 as the index
// console.log(result);

// replace() - return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi'); // if there are a result as same as re which is hello it will be changed
// console.log(newStr);

// METACHARACTER SYMBOLS

let re;
// literal characters
re = /hello/; // does not match
re = /hello/i; // matched

// metacharacter symbols
re = /^h/i;  // must start with .... console: Hello World matched ^h
re = /d$/i;  // must ends with ... console: Hello World matched d$
re = /^hello$/i; // must start and must end ... console: Hello World does not mathed ^hello$
re = /h.llo/i; // matches any one character
re = /h*llo/i; // matches any character zero or more times ... ex: heeeello will match
re = /gre?a?y/i; // optional character.  // optional: gray, grey or gry will match
re = /gre?a?y\?/i; // escape character

// string to mathc
// const str = 'Hello';
const str = 'gray?';

// log results
const result = re.exec(str);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not mathed ${re.source}`);
    }
}

reTest(re, str);