let hf = require('../index'); //require('help-functions');
let fs = require('fs');
const path = require('path');

let files = fs.readdirSync(__dirname).filter(f => fs.statSync(path.join(__dirname, f)).isDirectory());

console.log(gl_hr, '\nВСЕ DEMO (визуализация javascript) : \n',  files, '\n', gl_hr);