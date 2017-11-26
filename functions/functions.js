/* =======================================htmlspecialchars=======================================*/
exports.escapeHtml = function(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
};

exports.escapeHtml_decode = function(string, quote_style) {
  var optTemp = 0,
    i = 0,
    noquotes = false;
  if (typeof quote_style === 'undefined') {
    quote_style = 2;
  }
  string = string.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  var OPTS = {
    'ENT_NOQUOTES': 0,
    'ENT_HTML_QUOTE_SINGLE': 1,
    'ENT_HTML_QUOTE_DOUBLE': 2,
    'ENT_COMPAT': 2,
    'ENT_QUOTES': 3,
    'ENT_IGNORE': 4
  };
  if (quote_style === 0) {
    noquotes = true;
  }
  if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
    quote_style = [].concat(quote_style);
    for (i = 0; i < quote_style.length; i++) {
      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
      if (OPTS[quote_style[i]] === 0) {
        noquotes = true;
      } else if (OPTS[quote_style[i]]) {
        optTemp = optTemp | OPTS[quote_style[i]];
      }
    }
    quote_style = optTemp;
  }
  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
    string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
    // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
  }
  if (!noquotes) {
    string = string.replace(/&quot;/g, '"');
  }
  // Put this in last place to avoid escape being double-decoded
  string = string.replace(/&amp;/g, '&');

  return string;
}
/* =======================================htmlspecialchars=======================================*/

exports.capitalizeFirstLetter = function(string) {
    return string[0].toUpperCase() + string.slice(1);
};

exports.toLowerFirstLetter = function(string) {
    return string[0].toLowerCase() + string.slice(1);
};

exports.supports_localStorage = function() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
      return false;
  }
};

let getBrowser = function() {
    var b = "unknown";
    try {
        var e;
        var f = e.width;
    } catch (e) {
        var err = e.toString();
        if(err.search("not an object") !== -1){
            return "safari";
        } else if(err.search("Cannot read") !== -1){
            return "chrome";
        } else if(err.search("e is undefined") !== -1){
            return "firefox";
        } else if(err.search("Unable to get property 'width' of undefined or null reference") !== -1){
            if(!(false || !!document.documentMode) && !!window.StyleMedia){
                return "edge";
            }
        } else if(err.search("cannot convert e into object") !== -1){
            return "opera";
        } else if(/*@cc_on!@*/false || !!document.documentMode){
            return "IE";
        } else {
            return undefined;
        }
    }
};

exports.getFunctionName = function(){
  let err = new Error().stack, txt_fun,fun,emp;
  emp = ' - АНОНИМНАЯ';
  if(getBrowser() == "chrome") {
    fun = err.split('\n')[2].split(' ')[5];
    if(fun != 'Object.<anonymous>'){ txt_fun = err.split('\n')[2].split(' ')[5];}else{txt_fun = emp}
    return getBrowser() + ' | ФАЙЛ ' + (err).split('\n')[2].split(' ')[6].split('/')[4].split(':')[0] + ' | ФУНКЦИЯ ' + txt_fun + ' | ';
  }else{
    fun = err.split('\n')[1].split('@')[0];
    if(fun != ''){ txt_fun = err.split('\n')[1].split('@')[0]}else{txt_fun = emp}
    return getBrowser() + ' | ФАЙЛ ' + (err).split('js/')[1].split(':')[0] + ' | ФУНКЦИЯ ' + txt_fun + ' | ';
  }
};

// process.stdout.write('КОНТЕНТ ИЗ help-functions:' +'\n' + '| functions ');