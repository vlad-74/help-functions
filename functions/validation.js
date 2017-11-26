exports.isEmpty = function(value){
	let typeofValue = typeof value;
	switch (typeofValue) {
	    case "string":
	    	return value.trim().length == 0;
	    	break; 
	    case "number":
	        return isNaN(value);
	        break; 
	    case "undefined":
	        return true;
	        break;
	    case "object":
	        return value == null || JSON.stringify(value).trim().length < 3;
	        break;	        
	    default: 
	        return false;
	}
}

exports.classof = function(o) {
 if (o === null) return "Null";
 if (o === undefined) return "Undefined";
 return Object.prototype.toString.call(o).slice(8,-1);
};

// process.stdout.write('| validation ');