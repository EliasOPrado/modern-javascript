/*
* EasyHTTP Library
* @version 3.0.0
* @author Elias Prado
* @license MIT
**/

class EasyHTTP {
    //make http get request
async get(url){
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // make http post request

async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
        
    };

// make a http put request
async put(url, data) {
      const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    };



// maek a http delete request
    async delete(url) {
        
        const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type':'application/json'
                },
                // not need the body as not data is being sended
                // body: JSON.stringify(data)
            })
            const resData = await 'Resource deleted';
         return resData;
        };
}


