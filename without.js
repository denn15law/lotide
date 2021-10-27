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

const without = function(source, itemsToRemove) {
  let output = [];
  let keep;

  for (let itemSource of source) {
    keep = true;
    for (let itemRemove of itemsToRemove) {
      if(itemSource === itemRemove){
        keep = false
        break;
      }
    }
    if (keep){
      output.push(itemSource)
    }
  }
  console.log(output);
  return output;
};


without(["1", "2", "3"], [1, 2, "3"]); //  => ["1", "2"]

// const words = ["hello", 'world', 'lighthouse']
// without(words, ['lighthouse'])
// assertArraysEqual(words, ["hello", 'world', 'lighthouse'])
