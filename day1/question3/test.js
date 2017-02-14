(function(){
  'use strict';
  var p = require('./code.js');
  describe("Person Class: Create a person, give it attribute", function() {

    it("The person should be a type of `object`, and an instance of the `Person` class", function() {
      var person = new p.Person();
      expect(typeof person).toEqual(typeof {});
      expect(person instanceof p.Person).toBeTruthy();
    });


    it("The person name and title should be a property of the person", function() {
      var person = new p.Person('jare', 'yinka', true);
      expect(person.getFullName()).toBe('Mr. jare yinka.');
    });

    it("The person should be able to set firstName and lastName", function() {
      var person = new p.Person('Sola', 'Kosoko', false);
      expect(person.firstName).toBe('Sola');
      expect(person.lastName).toBe('Kosoko');
      
    });

    it("The person should be able to set salary or wage", function() {
      var person = new p.Person('Sola', 'Kosoko', false);
      person.salary(2000);
      expect(person.wage).toBe(2000);
    });


    it("The person should return the instance of the Person class", function() {
      var child = new p.Person('Sola', 'Kosoko');
      expect(child instanceof p.Person).toBeTruthy();
    });
  });
})();