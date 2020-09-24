// basic structure

// (function(){
//     // declare private vars and function

//     return {
//         //declare public vars and function
//     }
// })();

// STANDARD MODULE PATTERN // PRIVATE
// const UICtrl = (function(){
//     let text = 'Hello Elias';

//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('item added...');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get // if get is not inclued the function will be private
    }
})();

ItemCtrl.add({id: 1, name: 'John'});

console.log(ItemCtrl.get(1));// will return the item added

/*
basically to make a private function public you will have
to add the functionality that will make its public within the
function....
*/