(function() {
  'use strict';
  
  var a = require('./code.js');
	describe("get all Prime Numbers in a number tests ", function() {

	    it("should return 'it does not accept string' for 'alphabet'", function() {
	      expect(a.getPrimes('alphabet')).toBe('it does not accept string');
	    });
	    it("should return 'it does not accept string' for 'alphabet'", function() {
	      expect(a.getPrimes()).toBe('enter a number');
	    });


	  describe("Case for whole number", function() {
	  	it("should return 'Enter a positive number' for '-1'", function() {
	      expect(a.getPrimes(-1)).toEqual('Enter a positive number');
	    });

	  	it("should return 'Enter a number greater than 1' for '1'", function() {
	      expect(a.getPrimes(0)).toEqual('Enter a number greater than 1');
	    });

	    it("should return `[2, 3, 5]` for '6'", function() {
	      expect(a.getPrimes(6)).toEqual([2, 3, 5]);
	    });
	    it("should return `[2, 3, 5,7]` for '10'", function() {
	      expect(a.getPrimes(10)).toEqual([2, 3, 5,7]);
	    });
	    it("should return `[2]` for '2'", function() {
	      expect(a.getPrimes(2)).toEqual([2]);
	    });
	  });
	});
})();