let hf = require('../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

console.log('\ntoString - ВОЗВРАЩАЕТ ТЕКСТ ФУНКЦИИ !!! : hf.arr.gl_min.toString() = \n', hf.arr.gl_min.toString());

let str = `
(function() { // функция module 
  // Здесь находится реализация модуля.
}()); // конец литерала функции и ее вызов.


Методы call() и apply()
Первым аргументом обоим методам, call() и apply(), передается объект, относительно которого вызывается 
функция; этот аргумент определяет контекст вызова и становится значением ключевого слова this в теле функции
f.call(o);
f.apply(o);
АНАЛОГ :
o.m = f; // Временно сделать f методом o.
o.m(); // Вызывать его без аргументов.
delete o.m; // Удалить временный метод.

Все остальные аргументы метода call(), следующие за первым аргументом, 
определяющим контекст вызова, передаются вызываемой функции.
f.call(o, 1, 2);
f.apply(o, [1,2]);
`
console.log(str);
console.log('Math.max.apply(Math, [1,10,100,-1000]) = ', Math.max.apply(Math, [1,10,100,-1000]));

let str2 = `
Метод bind()
Основное назначение метода bind() состоитв том, чтобы связать (bind) функцию с объектом. 
Если вызвать метод bind() функции f и передать ему объект o, он вернет новую функцию. 
Вызов новой функции (как обычной функции) выполнит вызов оригинальной функции f как метода 
объекта o. Любые аргументы, переданные новой функции, будут переданы оригинальной функции.

bind() выполняет частичное применение: помимо значения this связаны будут все аргументы, 
переданные методу bind() после первого его аргумента. Частичное применение – распространенный 
прием в функциональном программировании и иногда называется каррингом (currying). 

function f(y) { return this.x + y; } // Функция, которую требуется привязать
var o = { x : 1 }; // Объект, к которому выполняется привязка
var g = f.bind(o); // Вызов g(x) вызовет o.f(x)
g(2) // => 3
`
console.log(str2);

function f(y) { return this.x + y; } 
var o = { x : 1 };
var g = f.bind(o); 

console.log('g(2) = ', g(2));

let str3 = `
function f(y,z) { return this.x + y + z }; // Еще одна функция сложения
var g = f.bind({x:1}, 2); // Связать this и y
g(3) // => 6: this.x - связан с 1, y - связан с 2, а 3 передается в z
`
console.log(str3);

function ff(y,z) { return this.x + y + z };
var gg = ff.bind({x:1}, 2); 
gg(3) 
console.log('gg(3) = ', gg(3));

let str4 = `
Конструктор Function()
var f = new Function("x", "y", "return x*y;");
var f = function(x, y) { return x*y; }
Конструктор Function() принимает произвольное число строковых аргументов.
Последний аргумент должен содержать текст с телом функции;
Может содержать произвольное число инструкций на языке JavaScript, разделенных точкой с запятой
`
console.log(str4);

let str5 = `
function User(name){
    this.name = name;
}

User.prototype.hello = function(){
    return "Hello, " + this.name;
}
`
console.log(str5);

function User(name){
    this.name = name;
}

User.prototype.hello = function(){
    return "Hello, " + this.name;
}
let vasya = new User("Вася");
console.log('let vasya = new User("Вася"); vasya.hello() = ', vasya.hello());

console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА ФУНКЦИИ-МОДУЛЯ=====================') ;
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");




