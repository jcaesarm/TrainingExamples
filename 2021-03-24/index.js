//Java Script basics

//this is a comment of 1 line 

/**
 * This is a multiline
 * comment
 */


//Declarations 
var j; //we can declarate a variable optionali initilizing it to a value
console.log('The value of j is ' + j);
var j = true; // asiigned a boolean value to a
console.log('The value of j is ' + j);


let c = 'Hello World!'; //declarate a block-scoped, local variable
console.log('The value of c is ' + c);

const pi = 3.1416; // Declarate a block-scoped, read-only named constant.
console.log('The value of pi is ' + pi);

// Arrays
let dayofweek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log('The days of the week are ' + dayofweek);


// Normal Funtion
function b() {
    return 'Bye!';
}

// local functions 
// Arrow funtion
const b1 = () => {
    return 'Bye!';
} 

// Funtion Expression
const b2 = function() {
}

//example funtion
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

var x;
x = factorial(5); // x gets the factorial of 5
console.log('The factorial fo 5 is ' + x);