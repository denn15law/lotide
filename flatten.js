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

module.exports = flatten;
