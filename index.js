global.gl_hr = '=======================================================================================';
global.gl_rz = '---------------------------------------РЕЗУЛЬТАТ---------------------------------------';

require('./global.js');

exports.fun = require('./functions/functions');
exports.arr = require('./functions/array'); 
exports.obj = require('./functions/obj');
exports.fil = require('./functions/fs');
exports.aja = require('./functions/ajax');
exports.bro = require('./functions/browser');
exports.mng = require('./functions/mongo');
exports.wat = require('./functions/watch'); 
exports.sts = require('./functions/status'); 
exports.vld = require('./functions/validation'); 

// process.stdout.write('| index ');