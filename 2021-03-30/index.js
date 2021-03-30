"use strict";
//Assignment
var myName = 'Julio';
var myAge = 23;
var hasComputer = true;
var color = 'navyblue';
// Reference Types
var myHobbies = ['swimming', 'playing chess', 'playing videogames'];
var Languages = ['Native Spanish', 'English', 'German', 'Mandarin'];
// Tuple
var myAddress = ['CDMX', 8000];
var myContact = [55555555, 'julio.martinez@ejamerica.com'];
// Enum
var Score;
(function (Score) {
    Score[Score["Math"] = 100] = "Math";
    Score[Score["programming"] = 101] = "programming";
    Score[Score["science"] = 90] = "science";
})(Score || (Score = {}));
var myMathScore = Score.Math;
console.log('Math score', myMathScore);
function sayGoodbye(name) {
    return 'Goodbye $(name)';
}
var result = sayGoodbye('Julio');
function process() {
    console.log('************Processing************');
}
process();
function division(num1, num2) {
    return num1 / num2;
}
var dresult = division(1024, 2);
console.log(dresult);
//Funtion type
var arithmetic;
arithmetic = division;
console.log(arithmetic(263737, 3));
var dog = {
    name: 'Panchito',
    age: 7,
    traits: ['chihuahua', 'small']
};
var dogData;
dogData = dog;
console.log(dogData);
// Class examples 
// console.log("Hello World!");
// //Primitive Types
// let myName: string = 'Steve';
// console.log(myName);
// let myAge: number = 21;
// let hasJob: boolean = true;
// let color: any = 'white';
// // Reference Types
// let myHobbies: string[] = ['cooking','baseball'];
// // Tuple
// let myAddress: [string, number] = ['Park street', 23];
// // Enum
// enum Color {
//     Grey,
//     Green = 100,
//     Red
// }
// let myColor: Color = Color.Red;
// //Function
// // function sayHello( name: string ){
// //     console.log(name);
// // }
// // sayHello("hola");
// function sayHello( name: string ): string{
//     return 'Hello $(name)';
//     // console.log('Hello');
// }
// let result: string = sayHello('Steve');
// function print( ):void{
//     console.log('Printing...');
// }
// print();
// function multiply( num1: number, num2: number ):number{
//     return num1 * num2;
// }
// multiply(12,13);
// function PrintMe(data:string):string{
//     return 'Hello $(data)';
// }
// //Funtion type
// let greetings: (a: string) => string;
// greetings = sayHello;
// greetings ('Steve');
// // greetings = PrintMe;
// // Objects
// type Complex = {name: string, age: number, hobbies: string[], print: (x: string)=> void  }
// let user: Complex = {
//     name: 'Steve',
//     age: 21,
//     hobbies: ['cooking', 'baseball'],
//     print: function(data: string):void {
//         console.log(data);
//     }
// }
// let userData: Complex;
// userData = user;
