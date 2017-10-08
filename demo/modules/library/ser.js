let hf = require('../../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);
console.log(gl_hr);

let str = `
1. БИБЛИОТЕКА 1 УРОВНЯ:
1.0. exports.addTwo2 = function (a, b) {return a + b}
1.1. exports.multiplyTwo2 = function(a, b) {return a * b}

2.БИБЛИОТЕКА 2 УРОВНЯ (ГЛОБАЛЬНЯ !!!):
2.1. exports.gl = require('./math2'); //!!! ИМПОРТ БИБЛИОТЕКИ 1 УРОВНЯ !!!
2.2. exports.addTwo = function (a, b) {return a + b}
2.3. exports.multiplyTwo = function(a, b) {return a * b}

3. ИСПОЛЬЗОВАНИЕ ГЛОБАЛЬНОЙ БИБЛИОТЕКИ (2 УРОВНЯ):
3.1. var math = require('./math'); // С WEBPACK_ом = import * as math from './math';
3.2. console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 2 УРОВНЯ = ', math.addTwo(1, 2), math.multiplyTwo(1, 2));
3.3. console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 1 УРОВНЯ = ', math.gl.addTwo2(1, 2), math.gl.multiplyTwo2(1, 2));

`
console.log(str);
console.log(gl_rz);

var math = require('./math'); // С WEBPACK_ом = import * as math from './math';
console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 2 УРОВНЯ = ', math.addTwo(1, 2), math.multiplyTwo(1, 2));
console.log('ВЫПОЛНЕНИЕ ИЗ БИБЛИОТЕКИ 1 УРОВНЯ = ', math.gl.addTwo2(1, 2), math.gl.multiplyTwo2(1, 2));

console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА БИБЛИОТЕКА=====================') ;
