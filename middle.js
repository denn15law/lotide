const eqArrays = function(firstArray, secondArray) {
  
  let output = false;

  if (firstArray.length !== secondArray.length) {
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

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log("✅ ✅ ✅ These arrays are equal");
  } else {
    console.log("🚫 🚫 🚫These arrays are not equal");
  }
};

const middle = function (arr){
  
  let output = []

  if (arr.length === 1 || arr.length === 2){
    console.log(output)
  }else {
    if (arr.length % 2 === 0){
      console.log('even')
    }else{
      console.log('odd')
    }
  }
  
}

middle([1, 2])