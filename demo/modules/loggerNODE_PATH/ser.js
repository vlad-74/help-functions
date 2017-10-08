console.log('ДЛЯ КОРРЕКНОЙ РАБОТЫ В CMD ВВЕСТИ = set NODE_PATH=.&node ser.js');
console.log('Поиск файлов : \n 1 .js 2 .node 3 .json 4. ../folder(index.js) 5. folder in node_modules\n');

var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}