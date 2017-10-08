let hf = require('../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

console.log('\n\nСтроковое преобразование: String(true) === "true" - ', String(true) === "true");
console.log('Числовое преобразование: Number(true) === 1 - ', Number(true) === 1);
console.log('Логическое преобразование: Boolean(0) === false - ', Boolean(0) === false);

console.log('typeof undefined - ', typeof undefined)// "undefined"
console.log('typeof 0  - ', typeof 0 )// "number"
console.log('typeof true - ', typeof true) // "boolean"
console.log('typeof "foo" - ', typeof "foo") // "string"
console.log('typeof {} - ', typeof {}) // "object"
console.log('typeof [] - ', typeof []) // "object"
console.log('typeof null - ', typeof null )// "object"(null == "object"–это официально признанная ошибка)
console.log('typeof function(){} - ', typeof function(){}) // "function"

console.log('\nhf.vld.classof(null) = ', hf.vld.classof(null) ) // => "Null"
console.log('hf.vld.classof(1) = ', hf.vld.classof(1) )// => "Number"
console.log('hf.vld.classof("str") = ', hf.vld.classof("str")) // => "String"
console.log('hf.vld.classof(false) = ', hf.vld.classof(false)) // => "Boolean"
console.log('hf.vld.classof({}) = ', hf.vld.classof({})) // => "Object"
console.log('hf.vld.classof([]) = ', hf.vld.classof([]) )// => "Array"
console.log('hf.vld.classof(/./) = ', hf.vld.classof(/./)) // => "Regexp"
console.log('hf.vld.classof(new Date()) = ', hf.vld.classof(new Date())) // => "Date"
// console.log('hf.vld.classof(window) = ', hf.vld.classof(window)) // => "Window" (объект клиентской среды выполнения)
// console.log('hf.vld.classof(new f()) = ', hf.vld.classof(new f())); // => "Object"


console.log('\nundefined == undefined это ', undefined === undefined) ;
console.log('true == true это ', true === true) ;
console.log('null == null это ', null === null) ;
console.log('"foo" == "foo" это ', "foo" === "foo") ;
console.log('"1" == 1 это ', "1" == 1) ;
console.log('"1" === 1 это !!!', "1" === 1) ;
console.log('{} == {} это ', {} == {}) ;
console.log('[] == [] это ', [] == []) ;
console.log('JSON.stringify([]) == JSON.stringify([]) это ', JSON.stringify([]) == JSON.stringify([]) );

console.log('\nNaN == NaN это ', NaN == NaN);
console.log('isNaN(NaN) это ', isNaN(NaN));

console.log('\nhf.vld.isEmpty(undefined) это ', hf.vld.isEmpty(undefined)) ;
console.log('hf.vld.isEmpty(null) это ', hf.vld.isEmpty(null)) ;
console.log('hf.vld.isEmpty(NaN) это ', hf.vld.isEmpty(NaN))  ;
console.log('hf.vld.isEmpty(" ") это ', hf.vld.isEmpty(" ") ) ;
console.log('hf.vld.isEmpty([]) это ', hf.vld.isEmpty([]) ) ;
console.log('hf.vld.isEmpty({}) это ', hf.vld.isEmpty({}) ) ;
console.log('hf.vld.isEmpty([1]) это ', hf.vld.isEmpty([1]) ) ;
console.log('hf.vld.isEmpty({id:"333"}) это ', hf.vld.isEmpty({id:"333"}) ) ;
console.log('hf.vld.isEmpty(" trtr ") это ', hf.vld.isEmpty(" trtr ") ) ;
console.log('hf.vld.isEmpty(333) это ', hf.vld.isEmpty(333) ) ;


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА TYPEOF=====================') ;
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");

