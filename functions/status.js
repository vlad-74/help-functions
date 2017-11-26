let obj = require('./obj');

let statusChange = function(status, val, callback){
    if(!callback)console.log(status.name + ': _eventCurrentStatus = ' + val + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
    else callback(status, val, callback);
};
exports.statusChange = statusChange;

exports.create_status = function(n, c/*c - ОПЦИОНАЛЬНО*/) {
	let status = {
	    name: undefined,
	    eventCurrentStatus: undefined,
	    time: Date.parse(new Date()),
	    oldvalue: undefined,
	    oldtime: undefined,
	    get currentStatus(){return this.eventCurrentStatus;},
	    set currentStatus(val){
	    	this.oldvalue = this.eventCurrentStatus; 
	    	this.oldtime = this.time;
	    	this.eventCurrentStatus = val;
	    	this.time = Date.parse(new Date()); 
	    	if (!c){statusChange(this, val, false)}else{statusChange(this, val, c)};
	    }
	};

	global[n] = obj.inherit(status); 
	global[n].name = n;
};

// process.stdout.write('| status ');