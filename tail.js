const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ['yo yo', 'lighthouse', 'labs'];
const tail = function(arr) {
  let tail = arr.slice(1);
  return tail;
};

const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], 'lighthouse');