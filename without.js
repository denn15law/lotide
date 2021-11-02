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
  return output;
};

module.exports = without;

