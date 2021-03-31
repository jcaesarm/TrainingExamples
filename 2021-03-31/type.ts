// // Class examples 

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
//     return `Hello $(name)`;
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

//Union type
// let myAge1: number | string | boolean = 27;

let myObj: string | null = null;

//Assignment
let myName: string = 'Julio';
let myAge: number = 23;
let hasComputer: boolean = true;
let color: any = 'navyblue';

// Reference Types
let myHobbies: string[] = ['swimming','playing chess', 'playing videogames'];
let Languages: string[] = ['Native Spanish','English', 'German','Mandarin'];

// Tuple
let myAddress: [string, number] = ['CDMX', 8000];
let myContact: [number, string] = [55555555, 'julio.martinez@ejamerica.com'];

// Enum
enum Score{
    Math = 100,
    programming ,
    science = 90,
}

let myMathScore: Score = Score.Math;
console.log('Math score', myMathScore);

function sayGoodbye( name: string ): string{
    return 'Goodbye $(name)';
}
let result: string = sayGoodbye('Julio');

function process( ):void{
    console.log('************Processing************');
}
process();

function division( num1: number, num2: number ):number{
    return num1/num2;
}
let dresult: number =division(1024,2);
console.log(dresult)

//Funtion type
let arithmetic: (x:number,y:number ) => number;
arithmetic = division;
console.log(arithmetic(263737,3));


// Objects
type DodDescription = {name: string, age: number, traits: string[] }

let dog: DodDescription = {
    name: 'Panchito',
    age: 7,
    traits: ['chihuahua', 'small']
}

let dogData: DodDescription;
dogData = dog;
console.log(dogData);