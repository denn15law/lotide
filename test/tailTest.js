const tail = require('../tail')

const assert = require('chai').assert;

describe ('#tail', () => {
  it ('should not change the length of the original array after', () => {
    const words = ['yo yo', 'lighthouse', 'labs'];
    const result = tail(words);
    assert.equal(words.length, 3);
  });

  it ('should return an array that is the tail', () => {
    const words = ['yo yo', 'lighthouse', 'labs'];
    const result = tail(words);
    assert.deepEqual(result, ['lighthouse', 'labs'])
  });
});
