# `БИБЛИОТЕКА ФУНКЦИЙ JAVASCRIPT` 
***
## ***как знак благодарности хорошему человеку Кропоткину Алексею :)***
## **snippets-библиотека** для "тренировки", некоторый функционал не дружит с webpack
***
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm install help-functions`
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `npm up help-functions` : обновить модуль у пользователя
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') [ВЕРСИИ help-functions (ссылка)](https://github.com/vlad-74/help-functions/blob/master/version.md)
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') ДОПОЛНЕНИЕ К help-functions :
***
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ИНСТРУМЕНТАРИЙ ДЛЯ НАЧИНАЮЩИХ РАЗРАБОТЧИКОВ : frontend-tool !!! </br> (logger; .styl =>.css; sourcemaps; спрайт из картинок; browserSync; минимизация; добавление хеша в название файлов; прописывание путей с хешом в html файле)](https://github.com/vlad-74/frontend-tool)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ ФУНКЦИОНАЛА CSS : frontend-tool-css </br> (social-icon; bootstrap; flexbox; box_sizing; position; animated; :nth-child)](https://github.com/vlad-74/frontend-tool-css)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ФУНКЦИОНАЛ РЕГИСТРАЦИИ И АУТЕНТИФИКАЦИ : frontend-tool-angular-registration](https://github.com/vlad-74/frontend-tool-angular-registration)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ ШАБЛОНОВ JAVASCRIPT : frontend-demo-pattern </br> (CONSTRUCTOR; FACTORY; DECORATOR; MODULE; OBSERVER; OBSERVER_STATUS; SINGLETON; STRATEGY; FACADE)](https://github.com/vlad-74/frontend-demo-pattern)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ ANGULARJS : frontend-angularjs](https://github.com/vlad-74/frontend-angularjs)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ВИЗУАЛИЗАЦИЯ GULP : frontend-demo-gulp](https://github.com/vlad-74/frontend-demo-gulp)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [КОНСОЛЬ-БРАУЗЕРНАЯ ВИЗУАЛИЗАЦИЯ ФУНКЦИОНАЛА javascript : frontend-demo-snippets](https://github.com/vlad-74/frontend-demo-snippets)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [ДОКУМЕНТИРОВАНИЕ ПРИЛОЖЕНИЯ : frontend-demo-document](https://github.com/vlad-74/frontend-demo-document)
# ![#FFDD00](https://placehold.it/20/FFDD00/000000?text='') [СВОЙ "взрослый" САЙТ С ДОМЕНОМ 1 УРОВНЯ : frontend-site](https://github.com/vlad-74/frontend-site)
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