// singleton pattern

const Singleton = (function(){
    let instance;

    function createInstance(){
        const object = new Object({name: 'Elias'});
        return object;
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();//{name: "Elias"}
// we cant have more than one instance with this pattern...