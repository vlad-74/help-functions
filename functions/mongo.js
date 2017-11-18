exports.creatCollection = function(dbn,col) {
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost/" + dbn;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.createCollection(col, function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
};

exports.insertIntoCollection = function(dbn, one_obj, col) {
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost/" + dbn;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection(col).insertOne(one_obj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
};

var gl_findOneFirst = {};
global.gl_findOneFirst = gl_findOneFirst;

exports.findOneFirst = function(dbn,col) {
    return new Promise(function(resolve, reject) {
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb://localhost/" + dbn;

        MongoClient.connect(url, function(err, db) {
        if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
            
            db.collection(col).findOne({}, function(err, result) {
                if (err) reject('В db.collection(col).findOne ОШИБКА - ' + err);
                resolve(result);
                db.close();
            });

            gl_findOneFirst = db.collection(col).findOne();
        });
    });
};

exports.findInCollection = function(dbn, obj, col) {
    return new Promise(function(resolve, reject) {
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb://localhost/" + dbn;

        MongoClient.connect(url, function(err, db) {
            if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
            db.collection(col).find(obj).toArray(function(err, result) {
                if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
                resolve(result);
                db.close();
            });
        });
    });
};

exports.limitCollection = function(dbn, col, n) {
    return new Promise(function(resolve, reject) {        
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb://localhost/" + dbn;

        MongoClient.connect(url, function(err, db) {
            if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
            db.collection(col).find().limit(n).toArray(function(err, result) {
                if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
                resolve(result);
                db.close();
            });
        });
    });
};

exports.sortCollection = function(dbn, obj, col) { // пример obj = { name: 1 }
    return new Promise(function(resolve, reject) {        
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb://localhost/" + dbn;

        MongoClient.connect(url, function(err, db) {
            if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
            db.collection(col).find().sort(obj).toArray(function(err, result) {
                if (err) reject('В MongoClient.connect ОШИБКА - ' + err);
                resolve(result);
                db.close();
            });
        });
    });
};

exports.udateCollection = function(dbn, oldobj, newobj, col) { // пример obj = { name: 1 }
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost/" + dbn;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection(col).updateOne(oldobj, newobj, function(err, res) {
            if (err) throw err;
            console.log('1 document updated');
            db.close();
        });
    });
};

exports.delOne = function(dbn, one_obj, col) {
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost/" + dbn;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection(col).deleteOne(one_obj, function(err, obj) {
        if (err) throw err;
        console.log('1 document deleted');
        db.close();
      });
    });
};

exports.dropCollection = function(dbn, col) {
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost/" + dbn;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection(col).drop(function(err, delOK) {
            if (err) throw err;
            console.log('Collection deleted');
            db.close();
        });
    });
};


process.stdout.write('| mongo ');