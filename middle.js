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
  let oddIndex
  let evenIndex = []

  if (arr.length === 1 || arr.length === 2){
    console.log(output)
    return output
  }else {
    if (arr.length % 2 === 0){
      // console.log('even')
      evenIndex = [arr.length/2 - 1, arr.length/2]
      console.log(evenIndex)
      for (let num of evenIndex){
        output.push(arr[num])
      }
      console.log(output)
    }else{
      // console.log('odd')
      oddIndex = Math.floor(arr.length / 2)
      // console.log(oddIndex)
      output.push(arr[oddIndex])
      // console.log(output)
    }
  }
  return output
}

// middle([1]) // => []
// middle([1, 2]) // => []
//odd
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
//even
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


//test assertions

assertArraysEqual(middle([1,2,3,4]),[2,3])