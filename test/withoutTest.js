const without = require('../without');
const assert = require('chai').assert;

describe ('#without', () => {
  it ("should return ['1', '2'] when passed in ['1', '2', '3'] and [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  });
});
