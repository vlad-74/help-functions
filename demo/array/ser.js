let hf = require('../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

console.log('\n!!!Вначале отрабатывают контексты require(), И только затем выводятся переменные!!!');
//КОНЕКСТ ИЗ require() ОТРАБАТЫВАЕТ ТОЛЬКО 1 РАЗ - ДО ВЫПОЛНЕНИЯ ИМПОРТИРУЕМЫХ ФУНКЦИЙ!!!!!!

console.log('\nСОЗДАНИЕ МАССИВА ЧЕРЕЗ Array.of()!!! : let myArr = Array.of(1,2); - ');
console.log(Array.of(1,2));

console.log('\nGLBL :\n', GLBL); //массив GBL

console.log('\nСравнение : JSON.stringify(GLBL) == JSON.stringify(GLBL2) - ', JSON.stringify(GLBL) == JSON.stringify(GLBL2) );

let arrCopy = [...GLBL]; // копируем массив arr в массив arrAdd
console.log('\nКопируем массив GLBL в массив arrCopy : let arrCopy = [...GLBL]; - \n', arrCopy); 

let fullCopy = GLBL.slice();
console.log('\nКопируем массив GLBL в массив fullCopy : let fullCopy = GLBL.slice(); - \n', arrCopy); 

[first, , third] = GLBL;
console.log('\nДЕСТРУКТУРИЗАЦИЯ 1 (МАССИВ В ПЕРЕМЕННЫЕ) : [first, , third] = GLBL; - \n', first, third);

[{title: t1}, , {title: t2}] = GLBL;
console.log('\nДЕСТРУКТУРИЗАЦИЯ 2 : [{title: t1}, , {title: t2}] = GLBL; - ' + t1 + '  | ' + t2);

let arrSlice = GLBL.slice(1, 3); // элементы 1, 2 (не включая 3)
console.log('\nКопируем часть GLBL в массив arrSlice : let arrSlice = GLBL.slice(1, 3); //элементы 1,2(не включая 3)-\n', arrSlice); 

GLBL.push({id: 4, title: "четвертый"},{id: 5, title: "пятый"}); 
console.log('\nДобавляем элементы в массив : GLBL.push({id: 4, title: "четвертый"},{id: 5, title: "пятый"}); - \n', GLBL);

GLBL.splice(3, 1); 
console.log('\nУдаляем 1 элемент из массива начиная со третьего индекса (0,1,2,3) : GLBL.splice(3, 1);  - \n', GLBL);

GLBL.splice(2, 1, {id: 0, title: "ноль"});
console.log('\nЗАМЕНА : \n1. удаляем 1 элемент со 2 индекса (0,1,2,3) \n2. вставляем элемент : GLBL.splice(2, 1, {id: 0, title: "ноль"});  - \n', GLBL);

for(var i=0; i < GLBL.length; i++){
	if(GLBL[i].title == "пятый"){GLBL.splice(i,1);}
}
console.log('\nУдаление циклом : for(var i=0; i < GLBL.length; i++){if(GLBL[i].title == "пятый"){GLBL.splice(i,1);}}\n',GLBL );

console.log('\nes6 map : GLBL.map(item => item.title); - ', GLBL.map(item => item.title));

let filterGLBL = 1;

let result = GLBL.filter(item => item.id == filterGLBL || item.id == filterGLBL-1); //[ { id: 1, title: 'second' }, { id: 2, title: 'thed' } ]
console.log('\nFilter : GLBL.filter(item => item.id == filterGLBL || item.id == filterGLBL-1); - \n', result); //[ { id: 2, title: 'second' } ]

let filterResult = result;
console.log('\nПрисвоение : FilterResult = result - ', filterResult);

let exceptFor = GLBL.filter(item => { if (item.id != filterGLBL && item.id != filterGLBL-1) return item} );
console.log('\nExcept for: GLBL.filter(item => { if (item.id != filterGLBL && item.id != filterGLBL-1) return item}); - \n', exceptFor);//  [ { id: 3, title: 'first' } ]

console.log('\nРучной выбор : GLBL[filterGLBL - 1].title); - ', GLBL[filterGLBL - 1].title); //second

console.log('\nСортировка по возрастанию : GLBL.sort((a,b) => a.id - b.id); : \n', GLBL.sort((a,b) => a.id - b.id));
console.log('\nСртировка по убыванию : GLBL.sort((a,b) => b.id - a.id); : \n', GLBL.sort((a,b) => b.id - a.id));

console.log('\nМульти сортировка : glblArr.sort(hf.arr.dynamicSortMultiple("c DESC","b Asc","a"))  :\n', glblArr.sort(hf.arr.dynamicSortMultiple("c DESC","b Asc","a")));

//===================================================================================//
console.log('\nglblNumbers - ', glblNumbers); //массив glblNumbers

console.log('\nЕсть 4 в массиве? - glblNumbers.includes(4) - ', glblNumbers.includes(4));

console.log('\nПервый индекс найденного элемента - glblNumbers.indexOf(3) - ', glblNumbers.indexOf(3));

console.log('\nПервый найденный элемен - glblNumbers.find(e => e > 5)', glblNumbers.find(e => e > 5));
console.log('\nИндекс первого найденного элемента - glblNumbers.findIndex(e => e > 5)', glblNumbers.findIndex(e => e > 5));

console.log('\nМассив в строку - glblNumbersy.join(";");', glblNumbers.join(';'));

let oddNumbers = glblNumbers.filter(number => number % 2);
console.log('\nНечетные : glblNumbers.filter(number => number % 2); - ', oddNumbers);

let evenNumbers = glblNumbers.filter( number => !(number % 2));
console.log('\nЧетные : glblNumbers.filter( number => !(number % 2)); - ', evenNumbers);

let total = 0; for(var i in glblNumbers) { total += glblNumbers[i]};
console.log('\nСУММА массива - for(var i in glblNumbers) { total += glblNumbers[i]}; - ', total);
// Среднее - это сумма значений элементов, деленная на их количество
var summ = function(x,y) { return x+y; }; var mean = hf.arr.gl_reduce(glblNumbers, summ)/glblNumbers.length;
console.log('СРЕДНЕЕ : var summ = function(x,y) { return x+y; }; var mean = hf.arr.gl_reduce(glblNumbers, summ/glblNumbers.length; = ', mean);

console.log('МАКСИМУМ в массиве : hf.arr.gl_max(...[1, 10, 100, 2, 3, 1000, 4, 5, -100000, 6], 15, 25, 10001) = ', hf.arr.gl_max(...[1, 10, 100, 2, 3, 1000, 4, 5, -100000, 6], 15, 25, 10001));
console.log('ММИНИМУМ в массиве : hf.arr.gl_min(...[1, 10, 100, 2, 3, 1000, 4, 5, -100000, 6], 15, 25, 10001) = ', hf.arr.gl_min(...[1, 10, 100, 2, 3, 1000, 4, 5, -100000, 6], 15, 25, 10001));

let sq = (x) => x*x;
console.log('\nРУЧНОЙ map (функция для каждого элемента массива ): let sq = (x) => x*x; hf.arr.gl_map(glblNumbers, sq) = \n', hf.arr.gl_map(glblNumbers, sq));


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА МАССИВЫ=====================') ;
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");