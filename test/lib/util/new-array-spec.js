var expect = require('chai').expect;

var newArray = require('../../../lib/util/new-array');

describe('Utility newArray', () => {
  it('creates an array filled with one specified element', () => {
    expect(newArray(3, 'a')).to.eql(['a', 'a', 'a']);
  });
  it('supports constructor function for each element by index', () => {
    expect(newArray(4, x => x * x)).to.eql([0, 1, 4, 9]);
  });
  it('returns an empty array if specified with non-positive length', () => {
    expect(newArray(0)).to.eql([]);
    expect(newArray(-1)).to.eql([]);
  });
});
