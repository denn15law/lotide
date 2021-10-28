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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item)
    // console.log('item AFTER: ', callback(item))
    // console.log('------')

    results.push(callback(item));
  }

  return results;
};
const results1 = map(words, word => word[0]);
const results2 = map(['hello','world'], word => word[1]);
const results3 = map(['lighthouse', 'labs'], word => word[2]);
// console.log(results1)


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['e', 'o']);
assertArraysEqual(results3, ['g', 'b']);