const flatten = require('../flatten');
const assert = require('chai').assert;

describe ('#flatten', () => {
  it ('should return [1,2,3,4,5,6] when passed in [1,2,[3,4],5,[6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
