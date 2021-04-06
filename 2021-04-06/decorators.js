"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorators
function Encryption(abc) {
    // encryption here
    console.log('Encrypt from decorator!');
    var data = 'Encrypted data';
    // encrypt data
    abc.prototype.save(data);
}
function decoratorName3(abc) {
    console.log('Hi from decorator 3');
}
var Database5 = /** @class */ (function () {
    function Database5(data) {
        this.data = data;
    }
    Database5.prototype.save = function (data) {
        // database saving here
        console.log('Save to DB...', data);
    };
    Database5 = __decorate([
        decoratorName3,
        Encryption,
        __metadata("design:paramtypes", [String])
    ], Database5);
    return Database5;
}());
