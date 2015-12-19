'use strict';

const newArray = require('./new-array');

const random = module.exports = {
  index: length => Math.floor(Math.random() * length),
  integer: (lower, upper) => lower + random.index(upper - lower),
  bool: () => random.index(2) === 0,
  element: array => array[random.index(array.length)],
  elements: (length, source) => newArray(length, source.length > 1 ? () => random.element(source) : source[0]),
  string: (length, source) => random.elements(length, source).join('')
};
