const countLetters = function(sentence) {

  //create result object to return
  const result = {};

  //loop through each letter
  //create object key and count for each letter
  //ignore spaces

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;