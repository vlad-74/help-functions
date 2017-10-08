# JAVASCRIPT `help-functions`

# ![#c5f015](https://placehold.it/15/c5f015/000000?text='') `cmd ДЕМО (СНИППЕТЫ)- визуализация функционала javascript и закрепление навыков`
# ![#c5f015](https://placehold.it/15/c5f015/000000?text='') `БИБЛИОТЕКА ФУНКЦИЙ`               

# ![#c5f015](https://placehold.it/15/c5f015/000000?text='') `npm install help-functions`

# DEMO:
## В cmd ПЕРЕЙТИ В ЛЮБУЮ ИЗ ПОДПАПОК demo И ВВЕСТИ node ser
## НАПРИМЕР (на винде):  ....\help-functions>`cd demo/array&node ser`

# ФУНКЦИИ РАЗБИТЫ НА JS ФАЙЛЫ "ПО ФУНКЦИОНАЛУ"
## ФАЙЛ index.js АГРЕГИРУЕТ ВСЕ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ :
#### `exports.fun = require('./functions');`
#### `exports.arr = require('./array'); `
#### `exports.obj = require('./obj');`
#### `exports.fil = require('./fs');`
#### `exports.bro = require('./browser');`
#### `exports.wat = require('./watch'); `
#### `exports.sts = require('./status');` 
#### `exports.vld = require('./validation');`

## ПРИМЕР ИСПОЛЬЗОВАНИЯ ФУНКЦИЙ :
#### `let hf = require('help-functions');` 

##### ДЛЯ МУЛЬТИСОРТИРОВКИ МАССИВА
#### `glblArr.sort(hf.arr.dynamicSortMultiple("c DESC","b Asc","a")));`
## ИЛИ ЕЩЕ
#### `let statuses = ['status_body','status_current_page', 'status_current_lng', 'status_current_flg'];`
##### ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА
#### `statuses.map(item => hf.sts.create_status(item, callbackf));` 
##### В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus
#### `statuses.map(item => global[item].currentStatus = "open");`
#### `setTimeout(function(){ global[statuses[1]].currentStatus ="изменение"; }, 2000);`


### `"ПОПОЛНИМ КОПИЛКУ"` - ВЫСЫЛАЙТЕ СВОИ "РАБОЧИЕ" ФУНКЦИИ И DEMO