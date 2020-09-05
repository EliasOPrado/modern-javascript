const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

// function createPost(){
//     setTimeout(function(){
//         //add dictionary at the end of the posts object
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}<br>${post.body}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

function createPost(post, callback){
    setTimeout(function(){
        //add dictionary at the end of the posts object
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}<br>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

    createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
