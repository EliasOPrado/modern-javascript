/*
* EasyHTTP Library
* @version 2.0.0
* @author Elias Prado
* @license MIT
**/

class EasyHTTP {
    //make http get request
get(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // make http post request

post(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Cpntent-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}
// make a http put request
put(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}


// maek a http delete request
delete(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type':'application/json'
            },
            // not need the body as not data is being sended
            // body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve('Resource deleted...'))
        .catch(err => reject(err));
    });
}
}

