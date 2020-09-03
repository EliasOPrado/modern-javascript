/*
Asynchronous Javascript 
*/ 

// //Synchronous Code
// posts = loadPostSync();// BLOCKING CODE
// // wait til posts are fetched
// // do something
// doTheNextThing();// has awaited post load

// //Asynchronous code
// posts = loadPostSync(function(){}// BLOCKING CODE
// // wait til posts are fetched
// // do something
// );

// doTheNextThing();// Does not has to wait to post load

/*
Most Async code you work with will be part of an API or library

- XMLHttpRequest & Fetch
- jQuery Ajax, Axios, other HTTP libraries
- Node.js (file syestem) module.

There are a few ways to work with Async code

- callbacks
- promises 
- async/await

What is Ajax?

- asynchronous javascript and xml
- set of web technologies
- send and receive data asynchronous
- does not interfere with the current page
- JSON has replaced XML for the most part

xmlHttpRequest (XHR) Object (All browsers have this)

- API in the form of an object
- Provided by the browser HS environment
- Methods transfer data between client / server
- Can be used with other protocols than HTTP
- Can work with data other than XML (JSON, plain text)

Libraries and other methods

- fetch api
- axios
- superagent
- jquery
- node http
*/