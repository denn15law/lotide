const assertEqual = require('../assertEqual');
const tail = require('../tail')

const words = ['yo yo', 'lighthouse', 'labs'];
const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], 'lighthouse');