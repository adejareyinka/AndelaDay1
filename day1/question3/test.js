(function(){
  'use strict';
  var p = require('./code.js');
  describe("Car Class: Create a car, make it drive", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var person = new p.Person();
      expect(typeof person).toEqual(typeof {});
      expect(person instanceof p.Person).toBeTruthy();
    });


    it("The car name and model should be a property of the car", function() {
      var person = new p.Person('jare', 'yinka', true);
      expect(person.getFullName()).toBe('Mr. jare yinka.');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var person = new p.Person('Sola', 'Kosoko', false);
      expect(person.firstName).toBe('Sola');
      expect(person.lastName).toBe('Kosoko');
      
    });

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var person = new p.Person('Sola', 'Kosoko', false);
      person.salary(2000);
      expect(person.wage).toBe(2000);
    });


    it("The car drive function should return the instance of the Car class", function() {
      var child = new p.Person('Sola', 'Kosoko');
      expect(child instanceof p.Person).toBeTruthy();
    });
  });
})();