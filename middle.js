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

module.exports = middle;