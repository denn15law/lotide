const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe ('#letterPositions', () => {
  it ("should return [1] when passed in ('hello').e ", () => {
    
    assert.deepEqual(letterPositions('hello').e , [1]);
  })
})
