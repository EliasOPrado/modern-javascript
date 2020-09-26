
// constructors
const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function(){
    let users = {}; // list of users

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // single user message
                to.recieve(message, from);
            }else{
                for(key in users){
                    if(users[key] !== from){
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const elias = new User('Elias');
const rute = new User('Rute');
const lucas = new User('Lucas');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(elias);
chatroom.register(rute);
chatroom.register(lucas);
chatroom.register(sara);

elias.send('hello sara', sara);
sara.send('hey elias', elias);

elias.send('Hello everyone!!!')
