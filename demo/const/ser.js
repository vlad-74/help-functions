let hf = require('../../index'); //require('help-functions');
console.log('\n' + gl_hr);
// console.log(gl_hr, '\nВСЕ ФУНКЦИИ В help-functions : \n',  hf, '\n', gl_hr);

let str = `
try { 
    let x = '3';
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
    console.log('ПРОВРКА - код до этого места не дошел');
}
catch(err) {
    console.log('Результат : Ошибка - ', err ); // СЮДА ПРОБРАСЫВАЕТСЯ  ОШИБКА throw ИЗ try
}
finally {
    console.log('Результат :  Эта часть кода реализуется всегда ');
}
`
console.log(str);
console.log(gl_rz);

try { 
	let x = '3';
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
    console.log('ПРОВРКА - код до этого места не дошел');
}
catch(err) {
    console.log('Результат : Ошибка - ', err ); // СЮДА ПРОБРАСЫВАЕТСЯ  ОШИБКА throw ИЗ try
}
finally {
    console.log('Результат :  Эта часть кода реализуется всегда ');
}

console.log(gl_hr);
let str2 = `
var text ='';
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "4 или 5";
        break; 
    case 0:
    case 6:
        text = "0 или 6";
        break;
    default: 
        text = "default";
}
`
console.log(str2);
console.log(gl_rz);
var text ='';
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "4 или 5";
        break; 
    case 0:
    case 6:
        text = "0 или 6";
        break;
    default: 
        text = "default";
};
console.log('new Date().getDay() = ', new Date().getDay() );
console.log('Результат - ', text );

console.log(gl_hr);
let str3 = `
let time = 5; 
if (time < 10){
    console.log('IF')
} else if (time < 20){
    console.log('ELSE IF')
} else{
    console.log('ELSE')
}
`
console.log(str3);
console.log(gl_rz);

let time = 5; if (time < 10) {console.log('IF')} else if (time < 20) {console.log('ELSE IF')} else {console.log('ELSE')}


console.log('\n\n=====================ОКОНЧАНИЕ БЛОКА КОНСТРУКЦИИ=====================') ;
console.log("console.log(gl_hr, '\\nВСЕ ФУНКЦИИ В help-functions : \\n',  hf, '\\n', gl_hr);");

