document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // open the file data.txt
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // optional - Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);// 3 progress
    }

    // optional - error message
    xhr.onerror = function(){
        console.log('Request error...');
    }


    // old approach 
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    // check readyState
    console.log('READYSTATE', xhr.readyState);// 1

    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // http status
    // 200 ok
    // 403 forbidden
    // 404 not found
}