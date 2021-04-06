"use strict";
// Generics - separate logic from type
function echo(data) {
    return data;
}
echo('hello');
echo(21);
echo(true);
echo({ name: 'Steve', age: 21 });
function betterEcho(data) {
    return data;
}
betterEcho('hello');
betterEcho(21);
betterEcho(true);
betterEcho({ name: 'Steve', age: 21 });
var myHobbies5 = ['cooking', 'baseball'];
var myHobbies6 = ['cooking', 'baseball'];
var myHobbies7 = [12, 15];
var myHobbies8 = [true, false];
var myHobbies9 = [{}, {}];
// class Collection<T extends {name: string, age: number} | {name: string, address:string}>
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.add = function (data) {
        console.log(data);
    };
    return Collection;
}());
var obj10 = new Collection();
obj10.add('hello');
var obj11 = new Collection();
obj11.add({ name: 'Steve', age: 21 });
// let obj12 = new Collection<boolean>( );
// obj12.add(true);
