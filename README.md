# `БИБЛИОТЕКА ФУНКЦИЙ JAVASCRIPT` </br>(библиотека для "тренировки на кошках", некоторый функционал не дружит с webpack)

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm install help-functions`
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm up help-functions` : обновить модуль у пользователя
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') [ВЕРСИИ help-functions (ссылка)](https://github.com/vlad-74/help-functions/blob/master/version.md)
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') ДОПОЛНЕНИЕ К help-functions :
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [СВОЙ "взрослый" САЙТ ЗА 99 РУБ/ГОД frontend-site](https://github.com/vlad-74/frontend-site)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ИНСТРУМЕНТАРИЙ ДЛЯ НАЧИНАЮЩИХ РАЗРАБОТЧИКОВ - frontend-tool](https://github.com/vlad-74/frontend-tool)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ ФУНКЦИОНАЛА css - frontend-tool-css](https://github.com/vlad-74/frontend-tool-css)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ ШАБЛОНОВ javascript - frontend-demo-pattern](https://github.com/vlad-74/frontend-demo-pattern)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [КОНСОЛЬ-БРАУЗЕРНАЯ ВИЗУАЛИЗАЦИЯ ФУНКЦИОНАЛА javascript - frontend-demo-snippets](https://github.com/vlad-74/frontend-demo-snippets)

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