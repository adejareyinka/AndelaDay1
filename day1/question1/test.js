(function() {
  'use strict';
  
  var a = require('./code.js');
	describe("Data types tests ", function() {
	  describe("Case for some false values", function() {

	    it("should return 'no value' for null", function() {
	      expect(a.dataTypes(null)).toEqual('no value');
	    });

	    it("should return 'no value' for undefined", function() {
	      expect(a.dataTypes(undefined)).toEqual('no value');
	    });

	  });

	  describe("Case for booleans", function() {

	    it("should return true for `true`", function() {
	      expect(a.dataTypes(true)).toBe(true);
	    });

	    it("should return false for `false`", function() {
	      expect(a.dataTypes(false)).toBe(false);
	    });

	  });

	  describe("Case for Numbers", function() {

	    it("should return 'less than 100' for 44", function() {
	      expect(a.dataTypes(44)).toBe('less than 100');
	    });

	    it("should return 'more than 100' for 144", function() {
	      expect(a.dataTypes(144)).toBe('more than 100');
	    });

	    it("should return 'equal to 100' for 100", function() {
	      expect(a.dataTypes(100)).toBe('equal to 100');
	    });


	  });

	  describe("Case for Strings", function() {

	    it("should return the length of `tergiversate`", function() {
	      expect(a.dataTypes('tergiversate')).toBe(12);
	    });

	    it("should return the length of an empty string", function() {
	      expect(a.dataTypes('')).toBe(0);
	    });

	    it("should return the length of `555`", function() {
	      expect(a.dataTypes('555')).toBe(3);
	    });

	  });

	  describe("Case for arrays", function() {

	    it("should return `2` for `[0, 1, 2]`", function() {
	      expect(a.dataTypes([0, 1, 2])).toBe(2);
	    });

	    it("should return `undefined` for `[]`", function() {
	      expect(a.dataTypes([])).not.toBeDefined();
	    });
	    it("should return `undefined` for `[4, 9]`", function() {
	      expect(a.dataTypes([4, 9])).not.toBeDefined();
	    });
	  });

	  describe("Case for functions", function() {
	    it("should call the `callback` function with argument true, and return `called callback`", function() {
	      var callback = function(arg) {
	        expect(arg).toBeTruthy();
	        if(arg === true) {
	          return 'called callback';
	        }
	      };
	      expect(a.dataTypes(callback)).toBe('called callback');
	    });
	  });
	});
})();