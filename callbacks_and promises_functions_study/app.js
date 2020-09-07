const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];


// CREATING AND GETTING POST WITHOUT CALLBACKS
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


// CREATING AND GETTING POSTS WITH CALLBACKS

// function createPost(post, callback){
//     setTimeout(function(){
//         //add dictionary at the end of the posts object
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}<br>${post.body}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

//     createPost({title: 'Post Three', body: 'This is post three'}, getPosts);


// CREATING AND GETTING POSTS WITH PROMISES

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //add dictionary at the end of the posts object
            posts.push(post);
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Somenthing went wrong.');
            }
            resolve();
        }, 2000);
    });


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

    createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(error){
        console.log(error);
    });
