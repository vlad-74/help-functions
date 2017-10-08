function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

console.log("Контекст из user.js!!!");

global.User = User;