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
const takeUntil = function(array, callback) {
  
  const results = [];

  for (let num of array) {
    if (!callback(num)) {
      results.push(num);
    }else{
      break;
    }
  }
  return results;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been","to","Hollywood"]);