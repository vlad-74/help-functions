let hf = require('../../index'); //require('help-functions');
require('../data/global'); //импорт функционала из global.js - GBL
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

console.log('\n!!!Вначале отрабатывают контексты require(), И только затем выводятся переменные!!!');
//КОНЕКСТ ИЗ require() ОТРАБАТЫВАЕТ ТОЛЬКО 1 РАЗ - ДО ВЫПОЛНЕНИЯ ИМПОРТИРУЕМЫХ ФУНКЦИЙ!!!!!!
console.log('\nGLBL :\n', GLBL); //массив GBL
console.log('\nglblNumbers - ', glblNumbers); //массив glblNumbers

/*==========================================================================================*/
console.log('\nFOR : for (let index = 0; index < GLBL.length; index++) {console.log(GLBL[index])};');
for (let index = 0; index < GLBL.length; index++) {console.log(GLBL[index])};
console.log('FOR : for (let index = 0; index < GLBL.length; index++) {console.log(GLBL[index].title)}');
for (let index = 0; index < GLBL.length; index++) {process.stdout.write(GLBL[index].title + ' | ')};

console.log('\n\nFOROF : for (let i of GLBL) {console.log(i)};');
for (let i of GLBL) {console.log(i)};
console.log('FOROF : for (let i of GLBL) {console.log(i.title)};');	
for (let i of GLBL) {process.stdout.write(i.title + ' | ')};

console.log('\n\nFOREACH : GLBL.forEach(function (value) {console.log(value)});');
GLBL.forEach(function (value) {console.log(value)});
console.log('FOREACH : GLBL.forEach(function (value) {console.log(value.title)});');
GLBL.forEach(function (value) {process.stdout.write(value.title +' | ');});

console.log('\n\nES6 map : GLBL.map(item => item); - \n', GLBL.map(item => item));
console.log('ES6 map : GLBL.map(item => item.title); - ', GLBL.map(item => item.title));

let cyc = `
FORIN : for(p in GLBL) - process.stdout.write(p + ' | '); 
`
process.stdout.write(cyc);
for(p in GLBL)  process.stdout.write(p + ' | '); 

console.log('\n\nDOHILE : var i = 0; do {i += 1; process.stdout.write(i + " | ");} while (i < 10); -');
var i = 0; do {i += 1; process.stdout.write(i + " | ");} while (i < 10);

console.log('\n\nWHILE : var w = 0; while (w <= 10) {process.stdout.write(w +" | "); w++;} -');
var w = 0; while (w <= 10) {process.stdout.write(w +" | "); w++;}

console.log('\n\nВЫХОД(и для for) ИЗ ЦИКЛА - WHILE BREAK : \nvar k = 0; while (k <= 10) {if (k == 3){break;} process.stdout.write(k +" | "); k++;} -');
var k = 0; while (k <= 10) {if (k == 3){break;} process.stdout.write(k +" | "); k++;}

console.log('\n\nПРОПУСК(и для for) - WHILE CONTINUE : \nvar j = 0; check: while (j<= 10){j++; if (j == 3)continue check; process.stdout.write(j +" | "); } -');
var j = 0; check: while (j<= 10){j++; if (j == 3)continue check; process.stdout.write(j +" | "); }


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА ЦИКЛЫ=====================') ;
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");

