(function(){
  'use strict';
  var a = require('./code.js');

describe('Binary Search to traverse an ordered list, effectively', function() {
  describe('Populate the arrays with valid content', function() {
    
    it('should create an array from 1 to 20, with intervals of 1', function() {
      expect(a.oneToTwenty[0]).toBe(1);
      expect(a.oneToTwenty[19]).toBe(20);
      expect(a.oneToTwenty.length).toBe(20);
      for(var i = 0; i < a.oneToTwenty.length - 1;i++) {
        expect(a.oneToTwenty[i + 1] - a.oneToTwenty[i]).toBe(1);
      }
    });

    it('should create an array from 2 to 40, with intervals of 2', function() {
      expect(a.twoToForty[0]).toBe(2);
      expect(a.twoToForty[19]).toBe(40);
      expect(a.twoToForty.length).toBe(20);
      for(var i = 0; i < a.twoToForty.length - 1;i++) {
        expect(a.twoToForty[i + 1] - a.twoToForty[i]).toBe(2);
      }
    });

    it('should create an array from 10 to 10000, with intervals of 10', function() {
      expect(a.tenToOneThousand[0]).toBe(10);
      expect(a.tenToOneThousand[99]).toBe(1000);
      expect(a.tenToOneThousand.length).toBe(100);
      for(var i = 0; i < a.tenToOneThousand.length - 1;i++) {
        expect(a.tenToOneThousand[i + 1] - a.tenToOneThousand[i]).toBe(10);
      }
    });
  });

  describe('Get the index of the item with an expected number of loops in array [1, 2 . . . 20]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = a.oneToTwenty.search(16);
      expect(a.search.count).toBeLessThan(5);
      expect(a.search.index).toBe(15);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = a.oneToTwenty.search(33);
      expect(a.search.count).toBeLessThan(a.search.length);
      expect(a.search.index).toBe(-1);
    });
  
  
  it('should not contain any form of `indexOf` in the search function', function() {
    expect(a.Array.prototype.search.toString().indexOf('indexOf')).toBe(-1);      
  });
  });
  describe('Get the index of the item with an expected number of loops in array [2, 4 . . . 40]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = a.twoToForty.search(16);
      expect(a.search.count).toBeLessThan(5);
      expect(a.search.index).toBe(7);
    });

    it('should return {count: 0, index: 9} for 20', function() {
      var search  = a.twoToForty.search(20);
      expect(a.search.count).toBe(0);
      expect(a.search.index).toBe(9);
    });


    it('should return {count: 0, index: 19} for 40', function() {
      var search  = a.twoToForty.search(40);
      expect(a.search.count).toBe(0);
      expect(a.search.index).toBe(19);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = a.twoToForty.search(33);
      expect(a.search.count).toBeLessThan(a.search.length);
      expect(a.search.index).toBe(-1);
    });
  });
  });
  })();