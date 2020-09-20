
// // adding async to a function will return as Promise
// async function myFunc(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });

//     const error = true;// if true will send the Promise.reject()

//     if(!error){
//         const res = await promise;// wait until promise is resolved
//         return res;
//     }else{
//         await Promise.reject(new Error('Something went wrong..'));
//     }
    
// }

// // return the promise
// // console.log(myFunc);

// // getting the real output
// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
   
    // only proceed once its resolved
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

// console.log(getUsers());
getUsers().then(users => console.log(users));