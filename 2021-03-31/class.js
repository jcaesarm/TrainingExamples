"use strict";
// Object literal
var obj3 = { name: 'Julio', age: 23 };
// Class
// Template / Blueprint
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printAge = function () {
        console.log('Age...');
    };
    return Person;
}());
// Object
var john = new Person();
john.printAge();
