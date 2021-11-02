const findKeyByValue = function(obj, value) {
  
  let result;
  let objKeys = Object.keys(obj)
  for (let key of objKeys) {
    if (obj[key] === value) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;