'use strict';

const _ = require('lodash');

// app/calc.js
function sumTwoAtRandom (arr) {
  let values = _.sampleSize(arr, 2);
  return values.reduce(function(a, b) { 
    return a + b;
  }, 0);
}

module.exports.sumTwoAtRandom = sumTwoAtRandom;