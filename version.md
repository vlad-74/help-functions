# `ВЕРСИИ help-functions`

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
