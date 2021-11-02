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

module.exports = takeUntil;
