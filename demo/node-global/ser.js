// User делается глобальным через присвоение global.User
require('./user'); // импорт функционала из user.js

let vasya = new User("Вася");
let petya = new User("Петя");

vasya.hello(petya); //Hello, Петя