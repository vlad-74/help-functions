exports.phpCreateFile = function (fileName, p){ // fileName = 'fileName.json' или 'fileName.'
  var data = new FormData();
  data.append("data" , fileName);

  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
  xhr.open( 'POST', p, true );
  xhr.send(data);
}

exports.phpWriteFile = function(fileName, fileContent, p){ // fileName = 'fileName.json' или 'fileName.'
  var dataf = new FormData();
  dataf.append("name" , fileName);
  dataf.append("cont" , fileContent);

  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
  xhr.open( 'POST', p, true );
  xhr.send(dataf);
}

let getResultFromJsonNode = function(path){
   var menuButtons = require(path);// var a = JSON.parse(menuButtons);
   return menuButtons;  
};
exports.getResultFromJsonNode = getResultFromJsonNode;

exports.getResultFromJson = function(path){
  // path = '../../' + path; //console.log(path);

  var resultFromJson = null;
  try { 
    var xhr = new XMLHttpRequest();

    xhr.open('GET', path, false);
    xhr.send();

    if (xhr.status != 200) {
   // обработать ошибку
   alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
  // вывести результат
  // alert(xhr.responseText);
    }
    resultFromJson = JSON.parse(xhr.responseText);
    return resultFromJson;
  }
  catch(err) {
    resultFromJson = getResultFromJsonNode(path); 
    return resultFromJson;
  }
};

exports.promiseGetDataFromUrl = function(url){
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };
        
        xhr.onerror = function(error) {
            reject(error);
        };
        
        xhr.send();
    });
}

exports.httpGetPromise = function(url){
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

process.stdout.write('| ajax ');