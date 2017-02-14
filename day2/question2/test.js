(function(){
  'use strict';
  var a = require('./code.js');

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(a.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(a.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(a.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(a.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(a.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(a.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(a.reverseString('misc')).toEqual('csim');
    });

  });

});
})();