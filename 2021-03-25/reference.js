// primitive type
let a = 3;
let b;

b = a; // b = 3
a = 2; // a = 2

console.log(a);
console.log(b);

//reference type
let a1 = { greeting: 'Hi' };
let b1;

b1 = a1; // b1 - address a1
a1.greeting = 'Hello'; // b1 = ( greeting: 'Hello')

console.log(a1);
console.log(b1);