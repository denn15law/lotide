const middle = function(arr) {
  
  let output = [];

  if (arr.length < 3) {
    return output;
  } 
  if (arr.length % 2 === 0) {
    output.push(arr[Math.floor(arr.length / 2) - 1])
    output.push(arr[Math.floor(arr.length / 2)])

  } else {
    output.push(arr[Math.floor(arr.length / 2)])
  }
  return output;
};

module.exports = middle;