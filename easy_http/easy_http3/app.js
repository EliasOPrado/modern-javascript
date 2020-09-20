/*
Try one of the http functions to check the 
http framework.
- Data is based already with name, username and email address.
*/

const http = new EasyHTTP;

// get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//User data
const data = {
    name: 'Elias',
    username: 'Prado',
    email: 'anemail@email.com',
}

//  // create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

 // update post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// delte user
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));