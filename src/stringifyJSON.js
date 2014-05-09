// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    
    var result = "[";
    for (var i=0; i<obj.length; i++) {
      result +=  stringifyJSON(obj[i]) + ",";
    }
    if (result.slice(-1) === ",") {
      result = result.slice(0,-1);
    }
    return result + "]";
    
  } else if (obj === null) {
    
    return "null";
    
  } else if (typeof obj === "object") {
    
    var result = "{";
    for (var key in obj) {
      if (!((typeof obj[key] === 'function')||(typeof obj[key] === 'undefined'))) {
        result +=  stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ",";
      }
    }
    if (result.slice(-1) === ",") {
      result = result.slice(0,-1);
    }
    return result + "}";
    
  } else if (typeof obj === "string") {
    
    return '"' + obj + '"';
    
  } else if ((typeof obj === "number") || (typeof obj === "boolean")) {
    
    return obj.toString();
    
  } else {
    console.log(typeof obj);
    return "";
    
  }
};
