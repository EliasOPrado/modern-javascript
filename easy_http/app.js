
const http = new easyHTTP;

//get posts
http.get('https://jsonplaceholder.typicode.com/posts', 
function(error, posts){
    if(error){
        console.log(error)
    }else{
        console.log(posts);
    }
});