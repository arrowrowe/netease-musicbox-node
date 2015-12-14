'use strict';

module.exports = (length, fillWith) => {
  if (length <= 0) {
    return [];
  }
  let array = new Array(length);
  const fillWithFn = (typeof fillWith === 'function') ? fillWith : (() => fillWith);
  for (let i = 0; i < length; i++) {
    array[i] = fillWithFn(i);
  }
  return array;
};
