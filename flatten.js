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

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ ✅ ✅ ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🚫 🚫 🚫 ${firstArray} !== ${secondArray}`);
  }
};

const flatten = function(arr) {

  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let innerItem of item) {
        result.push(innerItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);