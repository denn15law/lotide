const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe ('#countLetters', () => {
  it ('returns an object when passed in empty string', () => {
    const expectedOutput = {};
    const input = '';
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it ("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } when passed in 'lighthouse in the house'", () => {
    const expectedOutput = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    const input = 'lighthouse in the house';
    assert.deepEqual(countLetters(input), expectedOutput);
  });
})