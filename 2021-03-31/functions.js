"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Normal function
function print() {
    console.log('Printing...');
}
print();
//Function expression
var addNumbers = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
};
addNumbers(1);
//Arrow function
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
multiplyNumbers(2, 4);
//---------------------------------
// Spread Operator (Arrays & Objects)
var numbers = [2, 12, 14, 16];
var numbersDup = __spreadArray([], numbers);
var object = { name: 'Julio', age: 23 };
var objectDup = __assign({}, object);
function save(obj) {
    //mutate or modify
    obj.name = 'Cesar';
    //save obj to db
}
save(__assign({}, object));
// Destructuring Operator (Arrays & Object)
var myHobbies2 = ['baseball', 'cooking'];
// const hobby1 = myHobbies2[0];
// const hobby2 = myHobbies2[1];
var hobby1 = myHobbies2[0], hobby2 = myHobbies2[1];
var userData2 = { name: 'Julio', age: 23 };
// const userName = userData2.name;
// const userAge = userData2.age;
var userAge = userData2.age, userName = userData2.name;
//---------------------------------
//Template literals (string)
var userName3 = 'Julio';
var greeting = 'Hello' + userName3;
console.log(greeting);
var greeting2 = "Hello " + userName3 + ",\n    I am cool!";
console.log(greeting2);
