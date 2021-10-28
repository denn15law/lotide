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
    console.log("✅ ✅ ✅ These arrays are equal");
  } else {
    console.log("🚫 🚫 🚫These arrays are not equal");
  }
};


const letterPositions = function(sentence) {
  const results = {};
  
  for (let index in sentence) {
    console.log(sentence[index]);
    if (sentence[index] !== ' ') {
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index));
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }

  }

  return results;
};
// console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').e , [1]);