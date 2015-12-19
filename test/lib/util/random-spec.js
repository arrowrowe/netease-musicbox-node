var expect = require('chai').expect;

var newArray = require('../../../lib/util/new-array');
var random = require('../../../lib/util/random');

describe('Utility random', () => {

  var Identity = x => x;
  var all = array => array.every(Identity);
  var range = length => newArray(length, Identity);

  var TOne = (array, fn) => {
    var appeared = newArray(array.length, false);
    while (!all(appeared)) {
      var piece = fn();
      expect(array).to.include(piece);
      appeared[array.indexOf(piece)] = true;
    }
  };

  var TMany = (array, length, fn) => {
    var appeared = newArray(array.length, false);
    while (!all(appeared)) {
      var pieces = fn();
      expect(pieces.length).to.equal(length);
      for (var i = 0; i < length; i++) {
        var piece = pieces[i];
        expect(array).to.include(piece);
        appeared[array.indexOf(piece)] = true;
      }
    }
  };

  it('generates an integer of [0, length)', () => {
    TOne(range(3), () => random.index(3));
  });

  it('generates an integer of [lower, upper)', () => {
    TOne([3, 4, 5, 6], () => random.integer(3, 7));
  });

  it('generates a boolean', () => {
    TOne([true, false], () => random.bool());
  });

  it('generates an element of a specified array', () => {
    var array = ['a', 'b', 'c'];
    TOne(array, () => random.element(array));
  });

  it('generates an subset (possibly with duplicate elements) of a specified array', () => {
    var array = ['a', 'b', 'c'];
    TMany(array, 4, () => random.elements(4, array));
  });

  it('generates a sub-string (possibly with duplicate characters) a specified string', () => {
    var array = 'abc';
    TMany(array, 4, () => random.string(4, array));
  });

  it('repeats if only one candidate available', () => {
    expect(random.elements(4, ['a'])).to.eql(['a', 'a', 'a', 'a']);
  });

});
