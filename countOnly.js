const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function (allItems, itemsToCount){
  
  let output = {};
  let counter

  for (let item of allItems){
    for(let itemCount in itemsToCount){
      counter = 0

      //console.log(item)
      // console.log(itemCount)
      // console.log(itemsToCount[itemCount])

      if (item === itemCount && itemsToCount[itemCount]){
        // console.log('add plus one', item)
        counter++
        output[item] = counter
      }
    }
  }
  return output
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);