# `БИБЛИОТЕКА ФУНКЦИЙ JAVASCRIPT help-functions`

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm install help-functions` или `npm install help-functions -S`
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm up help-functions` : обновить модуль у пользователя

## ВЫВЕСТИ НАЗВАНИЯ ВСЕХ ФУНКЦИЙ В help-functions:
### ....\help-functions>`node allfunctions`

## `ФУНКЦИИ "ПО ФУНКЦИОНАЛУ" РАЗБИТЫ НА JS ФАЙЛЫ`
## ФАЙЛ index.js АГРЕГИРУЕТ ВСЕ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ :
#### `require('./global.js');`
#### `exports.fun = require('./functions/functions');`
#### `exports.arr = require('./functions/array'); `
#### `exports.obj = require('./functions/obj');`
#### `exports.fil = require('./functions/fs');`
#### `exports.bro = require('./functions/browser');`
#### `exports.wat = require('./functions/watch'); `
#### `exports.sts = require('./functions/status');` 
#### `exports.vld = require('./functions/validation');`

## [ПРИМЕР ИСПОЛЬЗОВАНИЯ ФУНКЦИЙ (ссылка на runkit)](https://npm.runkit.com/help-functions):
#### `npm install help-functions` или `npm install help-functions -S`
#### `let hf = require('help-functions');`

#### `var largest = hf.arr.gl_max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000`
#### `console.log(largest);`

##### //ДЛЯ МУЛЬТИСОРТИРОВКИ МАССИВА :
#### `glblArr.sort(hf.arr.dynamicSortMultiple("c DESC","b Asc","a"));`

##### //МАССИВ СТАТУСОВ :
#### `let statuses = ['status_body','status_current_page', 'status_current_lng', 'status_current_flg'];`
##### //ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА :
#### `statuses.map(item => hf.sts.create_status(item));` 
##### //В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus
#### `statuses.map(item => global[item].currentStatus = "open");`
#### `setTimeout(function(){ global[statuses[1]].currentStatus ="изменение"; }, 2000);`


### `"ПОПОЛНИМ КОПИЛКУ"` - ВЫСЫЛАЙТЕ СВОИ "РАБОЧИЕ" ФУНКЦИИ