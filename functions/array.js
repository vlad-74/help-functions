exports.dynamicSortMultiple = function() {
    var props=[];
    /*Let's separate property name from ascendant or descendant keyword*/
    for(var i=0; i < arguments.length; i++){
        var splittedArg=arguments[i].split(/ +/);
        props[props.length]=[splittedArg[0], (splittedArg[1] ? splittedArg[1].toUpperCase() : "ASC")];
    }
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length ;
        /*Cycle on values until find a difference!*/
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i][0], props[i][1])(obj1, obj2);
            i++;
        }
        return result;
    }
}

/*Base function returning -1,1,0 for custom sorting*/
let dynamicSort = function(property, isAscDesc) { 
    return function (obj1,obj2) {
        if(isAscDesc==="DESC"){
            return ((obj1[property] > obj2[property]) ? (-1) : ((obj1[property] < obj2[property]) ? (1) : (0)));
        }
        /*else, if isAscDesc==="ASC"*/
        return ((obj1[property] > obj2[property]) ? (1) : ((obj1[property] < obj2[property]) ? (-1) : (0)));
    }
};
exports.dynamicSort = dynamicSort;

exports.gl_max = function(/*...*/){
 var mx = Number.NEGATIVE_INFINITY;
 for(var i = 0; i < arguments.length; i++)
 if (arguments[i] > mx) mx = arguments[i];
 return mx;
};
// var largest = gl_max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000

exports.gl_min = function(/*...*/){
 var mn = Number.POSITIVE_INFINITY;
 for(var i = 0; i < arguments.length; i++)
 if (arguments[i] < mn) mn = arguments[i];
 return mn;
}
// var mn = gl_min(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // 
// !!!console.log(gl_min(...[1, 10, 100, 2, 3, 1000, 4, 5, -10000, 6], 15, 25, -10001));


// Вызывает функцию f для каждого элемента массива и возвращает массив результатов.
// Использует метод Array.prototype.map, если он определен.
exports.gl_map = Array.prototype.map 
? function(a, f) { return a.map(f); } // Если метод map() доступен
: function(a,f) { // Иначе реализовать свою версию
    var results = [];
    for(var i = 0, len = a.length; i < len; i++) {
        if (i in a) results[i] = f.call(null, a[i], i, a);
    }
    return results;
};

// Выполняет свертку массива в единственное значение, используя функцию f и необязательное начальное значение. 
//Использует метод Array.prototype.reduce, если он определен.
exports.gl_reduce = Array.prototype.reduce
? function(a, f, initial) { // Если метод reduce() доступен.
    if (arguments.length > 2)
    return a.reduce(f, initial); // Если указано начальное значение.
    else return a.reduce(f); // Иначе без начального значения.
    }
: function(a, f, initial) { // Этот алгоритм взят из спецификации ES5
    var i = 0, len = a.length, accumulator;
    // Использовать указанное начальное значение или первый элемент a
    if (arguments.length > 2) accumulator = initial;
    else { // Найти первый элемент массива с определенным значением
        if (len == 0) throw TypeError();
        while(i < len) {
            if (i in a) {
            accumulator = a[i++];
            break;
        }
        else i++;
        }
        if (i == len) throw TypeError();
    }
    // Теперь вызвать f для каждого оставшегося элемента массива
    while(i < len) {
        if (i in a)
            accumulator = f.call(undefined, accumulator, a[i], i, a);
        i++;
    }
    return accumulator;
};

// process.stdout.write('| array ');