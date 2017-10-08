let hf = require('../../index'); //require('help-functions');
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

console.log('ПЕРЕЙТИ К status & watch - node ser');
console.log(gl_hr);

let str = `
Примесь (англ. mixin) – класс или объект, реализующий какое-либо чётко выделенное поведение. 
Используется для уточнения поведения других КЛАССОВ, не предназначен для самостоятельного 
использования.

/ примесь
var sayHiMixin = {
	sayHi: function() {console.log("Привет " + this.name);},
  	sayBye: function() {console.log("Пока " + this.name);}
};

// использование:
function User(name) {this.name = name;}

// передать методы примеси
for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];

// User "умеет" sayHi
new User("Вася").sayHi(); // Привет Вася

let Piter = new User("Петя"); console.log(Piter);

Piter.sayHi();
`
console.log(str);
console.log(gl_rz);

// примесь
var sayHiMixin = {
  sayHi: function() {
    console.log("Привет " + this.name);
  },
  sayBye: function() {
    console.log("Пока " + this.name);
  }
};

// использование:
function User(name) {
  this.name = name;
}

// передать методы примеси
for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];

// User "умеет" sayHi
new User("Вася").sayHi(); // Привет Вася

let Piter = new User("Петя"); 

console.log(Piter);

Piter.sayHi();

console.log(gl_hr);

let str2 = `
var eventMixin = {

  /**
   * Подписка на событие
   * Использование:
   *  menu.on('select', function(item) { ... }
   */
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Прекращение подписки
   *  menu.off('select',  handler)
   */
  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for(var i=0; i<handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Генерация события с передачей данных
   *  this.trigger('select', item);
   */
  trigger: function(eventName /*, ... */) {

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для события нет
    }

    // вызвать обработчики
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].slice.call(arguments, 1));
    }

  }
};

// Класс Menu с примесью eventMixin
function Menu() {
  // ...
}

for(var key in eventMixin) {
  Menu.prototype[key] = eventMixin[key];
}

// Генерирует событие select при выборе значения
Menu.prototype.choose = function(value) {
  this.trigger("select", value);
}

// Создадим меню
var menu = new Menu();

// При наступлении события select вызвать эту функцию
menu.on("select", function(value) {
  console.log("Выбрано значение " + value);
});

// Запускаем выбор (событие select вызовет обработчики)
menu.choose("123");
`
console.log(str2);
console.log(gl_rz);

var eventMixin = {

  /**
   * Подписка на событие
   * Использование:
   *  menu.on('select', function(item) { ... }
   */
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Прекращение подписки
   *  menu.off('select',  handler)
   */
  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for(var i=0; i<handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Генерация события с передачей данных
   *  this.trigger('select', item);
   */
  trigger: function(eventName /*, ... */) {

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для события нет
    }

    // вызвать обработчики
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].slice.call(arguments, 1));
    }

  }
};

// Класс Menu с примесью eventMixin
function Menu() {
  // ...
}

for(var key in eventMixin) {
  Menu.prototype[key] = eventMixin[key];
}

// Генерирует событие select при выборе значения
Menu.prototype.choose = function(value) {
  this.trigger("select", value);
}

// Создадим меню
var menu = new Menu();

// При наступлении события select вызвать эту функцию
menu.on("select", function(value) {
  console.log("Выбрано значение " + value);
});
// Запускаем выбор (событие select вызовет обработчики)
menu.choose("123");

///////////////////////////////////
Menu.prototype.hz = function(value) {
  this.trigger("cl", value);
}
menu.on("cl", function(value) {
  console.log("хрен знает - " + value);
});
menu.hz("дофига");
//////////////


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА MIXINS=====================') ;
console.log('ПЕРЕЙТИ К status & watch - node ser');
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");

