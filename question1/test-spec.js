(function() {
  'use strict';
  
  var a = require('./library.js');

//var myApp = require('../app/library.js');
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(a.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(a.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 68] for [4, 66, 6, 44, 7, 8, 8, 68, 2]', function () {
        expect(a.findMinMax([4, 66, 6, 44, 7, 8, 8, 68, 2])).toEqual([2, 68]);
      });
      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(a.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(a.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(a.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });


    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(a.findMinMax([4, 4, 4, 4])).toEqual([4]);

      });
      it('should return [0] for [0,0,0,0]', function () {
        expect(a.findMinMax([0,0,0,0])).toEqual([0]);
        
      });
      it('should return [4] for [-1,-1,-1,-1]', function () {
        expect(a.findMinMax([-1,-1,-1,-1])).toEqual([-1]);
        
      });
      it('should return [4] for [2,2,2,2]', function () {
        expect(a.findMinMax([2,2,2,2])).toEqual([2]);
        
      });

    });

  });

})();