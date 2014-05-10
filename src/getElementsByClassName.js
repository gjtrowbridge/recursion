// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  
  //Checks the element [el] and all it's descendants for
  //the given className (uses recursion)
  function getDescendantsByClassName(className, el) {
    
    var result = [];
    
    //checks current element for class name
    for (var i=0; i<el.classList.length; i++) {
      if (el.classList[i] === className) {
        console.log("TRUE!");
        result.push(el);
        break;
      }
    }
    
    //checks all descendant elements for className
    for (var i=0; i<el.childNodes.length; i++) {
      //If a text node, does nothing, since these have no classes and no descendants (I think)
      if (el.childNodes[i].nodeType !== 3) {
        result = result.concat(getDescendantsByClassName(className, el.childNodes[i]));
      }
    }
    
    //returns result
    return result;
  }
  return getDescendantsByClassName(className, document.body);
  
};
