const eqArrays = function(firstArray, secondArray) {
  
  let output = true;

  if (firstArray.length !== secondArray.length) {
    output = false;
    return output;
  } else {
    for (let i in firstArray) {
      if (firstArray[i] === secondArray[i]) {
        output = true;
      } else {
        output = false;
        break;
      }
    }
  }
  return output;
};

const eqObjects = function (object1, object2){


  //initilize object keys for each, returning array
  let objKeys1 = Object.keys(object1)
  let objKeys2 = Object.keys(object2)

  if (objKeys1.length === objKeys2.length){
    
    for (let key of objKeys1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if(!eqArrays(object1[key], object2[key])){
          return false
        }
      }else{
        if (object1[key] !== object2[key]){
          return false
        }
      }
    }
  }else {
    return false
  }

  return true
}

const assertObjectsEqual = function (actual, expected) {
  
}