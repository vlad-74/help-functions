let fs = require('fs');
const path = require('path');

function fileTostring(fl){
    return new Promise(function(resolve, reject) {
        fs.readFile(fl, function(err, data) {
          if (err) {
            if (err.code == 'ENOENT') {
                reject('ПУТЬ УКАЗАН НЕ ПРАИВЛЬНО - ' + err.message);
            } else {
                reject('НЕПОНЯТНАЯ ОШИБКА - ' + err);
            }
          } else {
            resolve(data.toString());
          }
        });  
    })
}
exports.fileTostring = fileTostring;

let allFiles = function(dir){
    let r = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isFile());
    return r;
};
exports.allFiles = allFiles;

let allDir = function(dir){
    let d = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());
    return d;
};
exports.allDir = allDir;

function cmdConsLog(dr,fl){
    let allfiles = allFiles(dr);
    let allfolders = allDir(dr);

    console.log('\n' + gl_hr, '\nВСЕ папки раздела : ', allfolders, '\nВСЕ файлы раздела : ', allfiles, '\n' + gl_hr);

    fileTostring(fl)
      .then(function res(result) {console.log(result + '\n' + gl_hr);})
      .catch(function err(result) {console.log('ОШИБОЧКА ВЫШЛА = ', result + '\n' + gl_hr);});
    console.log(gl_hr); 
}
exports.cmdConsLog = cmdConsLog;

let allFilesFromFolder = function(dir, filelist = []) {
    var path = path || require('path'),
    fs = fs || require('fs'),
    files = fs.readdirSync(dir),
    filelist = filelist || [];
    // path = gl_RootPath + path;

    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = allFilesFromFolder(path.join(dir, file), filelist);
        }
        else {
            filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};
exports.allFilesFromFolder = allFilesFromFolder;
//ПРИМЕР ИСПОЛЬЗОВАНИЯ: let tt = allFilesFromFolder(__dirname);
//let tt = allFilesFromFolder('../../helper/');
//ИЛИ
// let tt = allFilesFromFolder('D:/_DEVELOPER/Sites/_GIT/05-live-reload/helper/');
// console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);

let choiceAllFilesFromFolder = function(dir, choice = 'default', filelist = []) {
    var path = path || require('path'),
    fs = fs || require('fs'),
    files = fs.readdirSync(dir),
    filelist = filelist || [],
    choice = choice || 'default';

    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = choiceAllFilesFromFolder(path.join(dir, file), choice, filelist);
        }
        else {
            if(choice == 'default'){filelist.push(path.join(dir, file))};
            if(choice == 'path'){filelist.push(dir +'|' + file)};
            if(choice == 'folder'){filelist.push(path.basename(dir))};
            if(choice == 'file'){filelist.push(path.basename(file))};
            if(choice == 'ext'){filelist.push(path.extname(file))};

        }
    });
    return filelist;
};
exports.choiceAllFilesFromFolder = choiceAllFilesFromFolder;
//ПРИМЕР ИСПОЛЬЗОВАНИЯ: let tt = choiceAllFilesFromFolder(__dirname);
//let tt = choiceAllFilesFromFolder('../../helper/');
//ИЛИ
// let tt = choiceAllFilesFromFolder('D:/_DEVELOPER/Sites/_GIT/05-live-reload/helper/');
// console.log('\nВСЕ ФАЙЛЫ В ТЕКУЩЕЙ ПАПКЕ (смотри путь в командной сроке ПЛЮС путь в переменной) :\n', tt);

exports.createOrClearAndWrite = function(path, content){
    fs.writeFile(path, content, function(err) {
        if(err) throw err;
    });
};

exports.appendToFile = function(path, content){
    fs.appendFile(path, content, function (err) {
      if (err) throw err; 
    });
};

let copyFile = function(from, to){
    fs.createReadStream(from).pipe(fs.createWriteStream(to));
};
exports.copyFile = copyFile;

exports.deleteFile = function(filePath){
    fs.unlinkSync(filePath);
};

exports.rimraf = function(dir_path) {
    // dir_path = gl_RootPath + dir_path;
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function(entry) {
            var entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
};

exports.SynchronousMkdir = function(args){
  try {
    fs.mkdirSync(arg);
  } 
  catch(err) {
    console.log(err);
  }
};

exports.AsynchronousMkdir = function(path){
  fs.mkdir(path, function(err) {if(err) console.log(err)});
};

exports.SynchronousRmdir = function(path){
  try {
    fs.rmdirSync(path);
  } 
  catch(err) {console.log(err);}
};

exports.AsynchronousRmdir = function(path ){
    fs.rmdir(path , function(err) {if(err) console.log(err)});
}

let deleteFilePromise = function(dir, file) {
    return new Promise(function (resolve, reject) {
        var filePath = path.join(dir, file);
        fs.lstat(filePath, function (err, stats) {
            if (err) {
                return reject(err);
            }
            if (stats.isDirectory()) {
                resolve(deleteDirectoryPromise(filePath));
            } else {
                fs.unlink(filePath, function (err) {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                });
            }
        });
    });
};
exports.deleteFilePromise = deleteFilePromise;

let deleteDirectoryPromise = function(dir) {
    return new Promise(function (resolve, reject) {
        fs.access(dir, function (err) {
            if (err) {
                return reject(err);
            }
            fs.readdir(dir, function (err, files) {
                if (err) {
                    return reject(err);
                }
                Promise.all(files.map(function (file) {
                    return deleteFilePromise(dir, file);
                })).then(function () {
                    fs.rmdir(dir, function (err) {
                        if (err) {
                            return reject(err);
                        }
                        resolve();
                    });
                }).catch(reject);
            });
        });
    });
};
exports.deleteDirectoryPromise = deleteDirectoryPromise
let readFileSync = function(path){ 
    var contents = fs.readFileSync(path, 'utf8');
    return contents;
};
exports.readFileSync = readFileSync;

exports.readFileAsync = function(path){ 
    fs.readFile(path, function read(err, data) {
        var content = '';
        if (err) {throw err;} content = data.toString('utf8');
        console.log(content);
    });
};

exports.readFileLineByLine = function(filename, processline) {
    var stream = fs.createReadStream(filename);
    var s = "";
    stream.on("data", function(data) {
        s += data.toString('utf8');
        var lines = s.split("\n");
        for (var i = 0; i < lines.length - 1; i++)
            processline(lines[i]);
        s = lines[lines.length - 1];
    });

    stream.on("end",function() {
        var lines = s.split("\n");
        for (var i = 0; i < lines.length; i++)
            processline(lines[i]);
    });
};

// process.stdout.write('| fs ');
