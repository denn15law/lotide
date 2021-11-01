const assert = require('chai').assert;
const middle = require('../middle');

describe ('#middle', () => {
  it ('return [] when passed in [1]', () => {
    assert.deepEqual(middle([1]), [])
  });
  it ('return [3] when passed [1,2,3,4,5]', () => {
    const expectedOutput = [3];
    const input = [1,2,3,4,5];
    assert.deepEqual(middle(input), expectedOutput)
  });
  it ('return [2,3] when passed [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3])
  });
});

