const map = require('../map');
const assert = require('chai').assert;

describe ('#map', () => {
  it ("should return ['g', 'c', 't', 'm', 't'] when passed ['ground','control', 'to', 'major', 'tom'] and word => word[1]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  })

  it ("should return ['e', 'o'] when passed ['hello', 'world'] and word => word[1]", () => {
    const words = ['hello', 'world'];
    const results1 = map(words, word => word[1]);
    assert.deepEqual(results1, ['e', 'o']);
  })
})


