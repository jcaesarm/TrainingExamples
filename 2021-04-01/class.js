"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Object literal
var obj3 = {
    name: 'Julio',
    age: 23,
    printAge: function () {
        console.log('Age...');
    }
};
obj3.printAge;
// Class
// Template / Blueprint
//Scope: public, private, protected
//initialization : constructor
// Extending : extends
var Person = /** @class */ (function () {
    // constructor( ){ //default
    // }
    function Person(namex, agex) {
        // private age: number;
        this.type = 'Person';
        this.name = namex;
        this.age = agex;
    }
    Person.prototype.printAge = function () {
        console.log('Age...');
    };
    return Person;
}());
// Object, Using the remplate/blueprint
var julio = new Person('Julio', 23);
julio.printAge();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.major = '';
        _this.major = major;
        return _this;
    }
    return Student;
}(Person));
var cesar = new Student('Cesar', 23, 'Maths');
//-------------------------------------
// Getters & Stters
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = '';
        this._age = 0;
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 150) {
                console.log('Please give a valid age!');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var obj = new Person1();
obj.name = 'Julio'; //<-get this value from textbox
obj.age = 2100; //<-get this value from textbox
console.log(obj);
function saveToBD(obj) {
    //saves to adaptor....
}
//----------------------------------------
// Static
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calculateCircumference = function (dia) {
        return Helper.PI * dia;
    };
    Helper.prototype.saveToDB = function () {
        console.log('Save to db....');
    };
    Helper.PI = 3.14;
    return Helper;
}());
var obj4 = Helper.calculateCircumference(12);
console.log(obj4);
var obj5 = new Helper();
console.log(obj5);
// let result4 = obj4.calculateCircumference( 12 );
