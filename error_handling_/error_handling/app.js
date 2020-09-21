const user = {email: 'elias@email.com'};

try {
    // add non existence funct
    //produce an referenceError
    // myFunction();

    if(!user.name){
        // throw 'user has no name';
        throw SyntaxError('User has no name');
    }
} catch(err) {
    console.log(err);
    //console.log(err.name);
    //console.log(e.name);
    //console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs regardless of result..')
}

console.log('program continues')