let hf = require('../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

console.log('\nПЕРЕЙТИ К mixins - node mix');
console.log(gl_hr);

console.log('ДЛЯ РАБОТЫ СО СТАТУСАМИ НУЖНО ПОДКЛЮЧИТЬ - help-functions/status.js ');
let str = `
function callbackf(status, val){
 console.log('!!!Status__' + status.name + '__value = ' + val + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
}

//!! Вторрой параметр - callback - ОПЦИОНАЛЬНО
// hf.sts.create_status('page', callbackf); 
// hf.sts.create_status('body'); 

let statuses = ['body','page', 'lng', 'flg'];
statuses.map(item => hf.sts.create_status(item, callbackf)); //ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА
statuses.map(item => global[item].currentStatus = "open"); //В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus
setTimeout(function(){ global[statuses[1]].currentStatus ="изменение"; }, 2000);

// setTimeout(function(){ page.currentStatus ="закрытие"; }, 4000);
`
console.log(str);

function callbackf(status, val){
	console.log(status.name + ': !eventCurrentStatus = ' + val  + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
}

let statuses = ['status_body','status_current_page', 'status_current_lng', 'status_current_flg'];
statuses.map(item => hf.sts.create_status(item, callbackf)); //ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА
statuses.map(item => global[item].currentStatus = "open"); //В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus
setTimeout(function(){ global[statuses[1]].currentStatus ="изменение"; }, 2000);

console.log(gl_hr);

console.log('ДЛЯ НОРМАЛЬНОЙ РАБОТЫ НУЖНО ЧТОБЫ БЫЛ ПОДКЛЮЧЕН - help-functions/watch.js ');
let str2 = `
var o = { p: 1 };
o.watch('p', function (id, oldval, newval) {
  console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
  return newval;
});

o.p = 2; o.p = 3; 
delete o.p; o.p = 4;
o.unwatch('p'); o.p = 5;
`
console.log(str2);
var o = { p: 1 };

o.watch('p', function (id, oldval, newval) {
  console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
  return newval;
});

o.p = 2; o.p = 3;
delete o.p; o.p = 4;
o.unwatch('p'); o.p = 5;


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА WATCH=====================');
console.log('ПЕРЕЙТИ К mixins - node mix');
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");

