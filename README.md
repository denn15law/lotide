# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @denn15_law/lotide`

**Require it:**

`const _ = require('@denn15_law/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns first index of array
* `tail`: returns everything BUT the first index of any given array
* `middle`: returns the middle indexes of an array (middle 2 indexes for even numbered arrays)
* `countOnly`: returns the number of times each item appears in a given array
* `countLetters`: returns number of times each letter appears in a given string
* `findKey`: returns corrosponding key given an object and callback function 
* `findKeyByValue`: returns the key for an object when passed in a value
* `flatten`: removes nested arrays and returns a single array 
* `letterPositions`: returns an object with the letter postions when given a string
* `map`: returns an array with the letter positions when given an array and a callback function determining which position you want
* `takeUntil`: returns a slice of the array taken from the beginning and given a stopping point
* `without`: return a subset of an array, removing unwanted elements