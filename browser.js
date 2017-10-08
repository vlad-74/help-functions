exports.getBrowser = function() {
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

process.stdout.write('| browser ');