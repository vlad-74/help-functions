let hf = require('../../index'); //require('help-functions');

console.log(gl_hr);

let str = `
let hf = require('../../index'); //require('help-functions');

console.log('START');
// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result"); // переведёт промис в состояние fulfilled с результатом "result"
  	//ИЛИ reject(new Error("время вышло!"));
  }, 1000);
});

promise // promise.then навешивает обработчики на успешный результат или ошибку
  .then(// result - аргумент resolve   
    result => {console.log("Fulfilled: " + result);}, //первая функция-обработчик-запустится при вызове resolve
    error => {console.log("Rejected: " + error);}    //вторая функция-запустится при вызове reject
      // error - аргумент reject
  );
console.log('FINISH');

// Промис выполнится сразу же
var promise2 = new Promise((resolve, reject) => resolve('НЕОДНОКРАТНОЕ ИСПОЛЬЗОВАНИЕ promise2'));
promise2.then( function f1(result) {console.log(result); return 'f1';})
promise2.then( function f2(result) {console.log(result); return 'f2';})
        .then(function f2(data) {console.log('ВЫВОД return ИЗ ПРЕДЫДУЩЕГО .then = ', data)})

function httpGetPromise(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

httpGetPromise('/article/promise/userNoGithub.json')
  .then(JSON.parse)
  .then(user => httpGetPromise(\`https://api.github.com/users/\${user.name}\`))
  .then(
    JSON.parse,
    function githubError(error) {
      if (error.code == 404) {
        return {name: "NoGithub", avatar_url: '/article/promise/anon.png'};
      } else { throw error;}
    }
  )
  .then(function showAvatar(githubUser) {
    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 3000);
  })
  .catch(function genericError(error) {
    console.log('error ИЗ httpGetPromise'); // Error: Not Found
  });

let resjson = hf.aja.getResultFromJson(__dirname + '/menuButtons.json');
console.log('РЕЗУЛЬТАТ ФУНКЦИИ hf.aja.getResultFromJson : \\n', resjson);
`
console.log(str);
console.log(gl_rz);

console.log('START');

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result ИЗ ПЕРВОГО promise"); // переведёт промис в состояние fulfilled с результатом "result"
    //ИЛИ reject(new Error("время вышло!"));
  }, 1000);
});

promise // promise.then навешивает обработчики на успешный результат или ошибку
  .then(// result - аргумент resolve   
    result => {console.log("Fulfilled: " + result);}, // первая функция-обработчик - запустится при вызове resolve
    error => {console.log("Rejected: " + error);}    // вторая функция - запустится при вызове reject
      // error - аргумент reject
  );

console.log('FINISH');

// Промис выполнится сразу же
var promise2 = new Promise((resolve, reject) => resolve('НЕОДНОКРАТНОЕ ИСПОЛЬЗОВАНИЕ promise2'));
promise2.then( function f1(result) {console.log(result); return 'f1';})
promise2.then( function f2(result) {console.log(result); return 'f2';})
        .then(function f2(data) {console.log('ВЫВОД return ИЗ ПРЕДЫДУЩЕГО .then = ', data)})

function httpGetPromise(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

httpGetPromise('/article/promise/userNoGithub.json')
  .then(JSON.parse)
  .then(user => httpGetPromise(`https://api.github.com/users/${user.name}`))
  .then(
    JSON.parse,
    function githubError(error) {
      if (error.code == 404) {
        return {name: "NoGithub", avatar_url: '/article/promise/anon.png'};
      } else { throw error;}
    }
  )
  .then(function showAvatar(githubUser) {
    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 3000);
  })
  .catch(function genericError(error) {
    console.log('error ИЗ httpGetPromise'); // Error: Not Found
  });

let resjson = hf.aja.getResultFromJson(__dirname + '/menuButtons.json');
console.log('РЕЗУЛЬТАТ ФУНКЦИИ hf.aja.getResultFromJson : \n', resjson);

console.log('\n\n================ОКОНЧАНИЕ БЛОКА AJAX-PROMISE================');
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");


