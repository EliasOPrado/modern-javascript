
const http = new easyHTTP;

// //get posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(error, posts){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(posts);
//     }
// });

//Create data

const data = {
    title: 'Custom post',
    body: 'Content here'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, 
// function(error, post){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(post);
//     }
// });

//Update post
http.put('https://jsonplaceholder.typicode.com/posts/5', data, 
function(error, post){
    if(error){
        console.log(error)
    }else{
        console.log(post);
    }
});

//delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(error, response){
    if(error){
        console.log(error)
    }else{
        console.log(response);
    }
});
