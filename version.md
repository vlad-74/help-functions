# `ВЕРСИИ help-functions`

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.62`

## Добавлены стринговые функции delStart, delFinish, delMidle, delFrom
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.61`

## Добавлена ссылка на [frontend-tool-drag_drop (перетаскивание элементов)](https://github.com/vlad-74/frontend-tool-drag_drop)
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.57`

## Добавлена ссылка на [frontend-demo-document (документирование приложений)](https://github.com/vlad-74/frontend-demo-document)
## ====================================================
# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.56`

## Добавлена ссылка на [frontend-tool-angular-registration](https://github.com/vlad-74/frontend-tool-angular-registration)
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.53`

## Добавлена ссылка на [frontend-demo-gulp](https://github.com/vlad-74/frontend-demo-gulp)
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.51`

## Добавлена ссылка на [frontend-angularjs](https://github.com/vlad-74/frontend-angularjs)
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.51`

## Добавлена функция strReverse
#### exports.strReverse = function (str) {
####    return str.split('').reverse().join('');
#### };
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.49`

## Добавлена ссылка на [frontend-site](https://github.com/vlad-74/frontend-site)
## ====================================================

# ![#03CA27](https://placehold.it/20/c5f015/000000?text='') `ВЕРСИЯ : 1.0.39`

## ИЗМЕНЕНИЯ : добавлены 2 функции

### // ПРИМЕР ПРОМИСА ДЛЯ ТЕСТОВ С ЗАДАНHЫМ ИНТЕРВАЛОМ (n)
#### exports.getPromise = (n) => {
####  return new Promise(function(resolve, reject) {
####    setTimeout(() => {
####         resolve('Promise ФУНКЦИЯ getPromise'+ n +'() ОТРАБОТАЛА !');
####     }, n);
####  });
#### };

### // ВОЗВРАЩАЕТ НАЗВАНИЕ ФУНКЦИИ
#### exports.getFunctionName = function(){
####  return '| function - ' + (new Error()).stack.split('\n')[2].split(' ')[5] + ' | ';
#### };
## ====================================================