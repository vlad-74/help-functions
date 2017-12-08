exports.strReverse = function (str) {
    return str.split('').reverse().join('');
};

//Удалить с начала
exports.delStart = function (string, i=1){
	return string.slice(i)
};

//Удалить с конца
exports.delFinish = function(string, i=1){
	return string.slice(0, -i)
};

//Удалить промежуток
exports.delMidle = function (string, start=0, end=1000){
	return string.substring(start, end)
};

//Выбрать по сепаратору
exports.delFrom = function (string, separator, i){
	let arr = string.split(separator)
	return arr[i]
};