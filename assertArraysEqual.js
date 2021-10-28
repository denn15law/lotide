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

assertArraysEqual([1, 2, 3], [1, 2, 3])