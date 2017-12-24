# `БИБЛИОТЕКА ФУНКЦИЙ JAVASCRIPT` 
***
## ***как знак благодарности хорошему человеку Кропоткину Алексею :)***
## **snippets-библиотека** (некоторый функционал не дружит с webpack)
***
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm install help-functions`
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm up help-functions` : обновить модуль у пользователя
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') [ВЕРСИИ help-functions](https://github.com/vlad-74/help-functions/blob/master/version.md)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ help-functions И МНОГО ДРУГОГО](https://github.com/vlad-74/frontend-demo-snippets)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ДОПОЛНЕНИЕ К help-functions </br>(gulp, browsersync, yuidoc, angularjs, drag&drop, css, stylus, flexbox, bootstrap, autentication, patterns, logger, sourcemaps, sprite-image, minify, hash, social-icons, site)](https://github.com/vlad-74/help-functions/blob/master/more.md)
***
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
#### `exports.str = require('./functions/string');`
#### `exports.mng = require('./functions/mongo');` ("mongodb": "^2.2.33") 
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