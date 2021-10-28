const eqArrays = function(firstArray, secondArray) {
  
  let output = true;

  if (firstArray.length !== secondArray.length) {
    output = false
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


const middle = function(arr) {
  
  let output = [];
  let oddIndex;
  let evenIndex = [];

  if (arr.length === 1 || arr.length === 2) {
    console.log(output.length)
    return output;
  } else {
    if (arr.length % 2 === 0) {
      evenIndex = [arr.length / 2 - 1, arr.length / 2];
      for (let num of evenIndex) {
        output.push(arr[num]);
      }
    } else {
      oddIndex = Math.floor(arr.length / 2);
      output.push(arr[oddIndex]);
    }
  }
  return output;
};


//test assertions
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1,2,3,4]),[2,3]);