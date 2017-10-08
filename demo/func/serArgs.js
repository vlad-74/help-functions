let hf = require('../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

let str = `
Фактически arguments не является массивом – это объект Arguments.
Лучше рассматривать его как объект, имеющий некоторые пронумерованные свойства.
arguments[0] = null;

Комментирование аргументов : function func(/* массив */ from,  /* массив */ to,  /* целое */ length){}

Проверка количества переданных аргументов :
function f(x, y, z){
\0\0\// Проверяется, правильное ли количество аргументов передано
\0\0\ if (arguments.length != 3) throw "функция f вызвана с " + arguments.length + " аргументами, а требуется 3.";
}
`
console.log(str);

function f(x, y, z){
	if (arguments.length != 3) throw "ОШИБКА - функция f вызвана с " + arguments.length + " аргументами, а требуется 3.";
}
f(1,7,6);

let str2 = `
Функция без аргументов :
function gl_max(/*...*/){
\0\0\ var mx = Number.NEGATIVE_INFINITY;
\0\0\ // Цикл по всем аргументам, поиск и сохранение наибольшего из них
\0\0\ for(var i = 0; i < arguments.length; i++)
\0\0\0\0\ if (arguments[i] > mx) mx = arguments[i];
\0\0\ return mx;// Вернуть наибольшее значение
}
console.log(gl_max(...[1, 10, 100, 2, 3, 1000, 4, 5, -100000, 6], 15, 25, 10001));
`
console.log(str2);
console.log('!!! ... !!! Spread !!! =', hf.arr.gl_max( ...[1, 10, 100, 2, 3, 1000, 4, 5, -100000, 6], 15, 25, 10001));

str3 = `
// Определения нескольких простых функций
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

// Эта функция принимает одну из предыдущих функций в качестве аргумента и вызывает ее с двумя операндами
function operate(operator, operand1, operand2){
 return operator(operand1, operand2);
}
// Так можно вызвать эту функцию для вычисления выражения (2+3)+(4*5):
console.log(operate(add, operate(add, 2, 3), operate(multiply, 4, 5)));
`
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

function operate(operator, operand1, operand2){
 return operator(operand1, operand2);
}
console.log(str3);
console.log('operate(add, operate(add, 2, 3), operate(multiply, 4, 5)) = ', operate(add, operate(add, 2, 3), operate(multiply, 4, 5)));

str4 = `
//Литералы функций внутри литерала объекта.
var operators = {
 add: function(x,y) { return x+y; },
 subtract: function(x,y) { return x-y; },
 multiply: function(x,y) { return x*y; },
 divide: function(x,y) { return x/y; },
 pow: Math.pow // Можно использовать даже предопределенные функции
};

// Эта функция принимает имя оператора, отыскивает оператор в объекте,
// а затем вызывает его с указанными операндами.
// Обратите внимание на синтаксис вызова функции оператора.
function operate2(operation, operand1, operand2){
 if (typeof operators[operation] === "function")
 return operators[operation](operand1, operand2);
 else throw "неизвестный оператор";
}

// Вычислить значение ("hello" + " " + "world"):
var j = operate2("add", "hello", operate2("add", " ", "world"));

// Использовать предопределенную функцию Math.pow():
var k = operate2("pow", 10, 2);
`
var operators = {
 add: function(x,y) { return x+y; },
 subtract: function(x,y) { return x-y; },
 multiply: function(x,y) { return x*y; },
 divide: function(x,y) { return x/y; },
 pow: Math.pow 
};

function operate2(operation, operand1, operand2){
 if (typeof operators[operation] === "function"){
 return operators[operation](operand1, operand2);
 }else {throw "неизвестный оператор"};
}

var j = operate2("add", "hello", operate2("add", " ", "world"));

var k = operate2("pow", 10, 2);

console.log(str4);
console.log('operate2("add", "hello", operate2("add", " ", "world")) = ', operate2("add", "hello", operate2("add", " ", "world")));
console.log('operate2("pow", 10, 2) = ', operate2("pow", 10, 2));

str5 = `
!!!
Наприммер надо написать функцию, возвращающую уникальное целое число при 
каждом своем вызове. Функция никогда не должна возвращать одно и то же значение дважды. 
Чтобы обеспечить это,функция должна запоминать последнее возвращенное значение и сохранять его
между ее вызовами. Эту информацию можно было бы хранить в глобальной переменной, но это было бы 
нежелательно, потому что данная информация используется только этой функцией. Лучше сохранять 
ее в свойстве объекта Function
!!!

// Инициализировать свойство counter объекта функции. Объявления функций
// поднимаются вверх, поэтому мы можем выполнить это присваивание до объявления функции.
uniqueInteger.counter = 0;
// Эта функция возвращает разные целые числа при каждом вызове.
// Для сохранения следующего возвращаемого значения она использует собственное свойство.
function uniqueInteger() {
 return uniqueInteger.counter++; // Увеличить и вернуть свойство counter
}

!!! ИЛИ ЧЕРЕЗ ЗАМЫКАНИЕ !!!
var uniqueInteger2 = (function() { // Определение и вызов
 var counter = 0; // Частное значение для функции ниже
 return function() { return counter++; };
}());
`
uniqueInteger.counter = 0;

function uniqueInteger() {
 return uniqueInteger.counter++;
}

console.log(str5);
console.log('uniqueInteger() = ', uniqueInteger());
console.log('uniqueInteger() = ', uniqueInteger());
console.log('uniqueInteger() = ', uniqueInteger());

var uniqueInteger2 = (function() { // Определение и вызов
 var counter = 0; // Частное значение для функции ниже
 return function() { return counter++; };
}());

console.log('uniqueInteger2() = ', uniqueInteger2());
console.log('uniqueInteger2() = ', uniqueInteger2());
console.log('uniqueInteger2() = ', uniqueInteger2());

let str6 = `
function counter() {
 var n = 0;
 return {
 count: function() { return n++; },
 reset: function() { n = 0; }
 };
}
var c = counter(), d = counter(); // Создать два счетчика
c.count() // => 0
d.count() // => 0: они действуют независимо
c.reset() // методы reset() и count() совместно используют одну переменную
c.count() // => 0: сброс счетчика c
d.count() // => 1: не оказывает влияния на счетчик d
`
console.log(str6);

function counter() {
 var n = 0;
 return {
 count: function() { return n++; },
 reset: function() { n = 0; }
 };
}
var c = counter(), d = counter(); 
console.log('c.count() = ', c.count()); 
console.log('d.count() = ', d.count()); 
console.log('c.reset()'); 
console.log('c.count() = ', c.count()); 
console.log('d.count() = ', d.count()); 

let str7 = `
function counter(n) { // Аргумент n функции - скрытая переменная
 return {
 // Метод чтения свойства возвращает и увеличивает переменную счетчика.
 get count() { return n++; },
 // Метод записи в свойство не позволяет уменьшать значение n
 set count(m) {
 if (m >= n) n = m;
 else throw Error("значение счетчика нельзя уменьшить ");
 }
 };
}
var c = counter(1000);
c.count // => 1000
c.count // => 1001
c.count = 2000
c.count // => 2000
c.count = 2000 // => Ошибка!
`
console.log(str7);

function counter2(nn) {
 return {
 get count1() { return nn++; },
 set count1(mm) {
 if (mm >= nn) nn = mm;
 else throw Error("значение счетчика нельзя уменьшить ");
 }
 };
}
var c = counter2(1000);
console.log('c.count1 : ', c.count1);
console.log('c.count1 : ', c.count1);
console.log('c.count1 = 200 :', c.count1 = 2000);
console.log('c.count1 : ', c.count1);


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА ФУНКЦИИ-АРГУМЕНТОВ=====================') ;
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");
