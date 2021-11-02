const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe ('#findKeyByValue', () => {
  it ("should return 'drama' when passed in bestShowsByGenre and 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })

  it ("should return 'undefined' when passed in bestShowsByGenre and 'That 70's Show'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  })
})

