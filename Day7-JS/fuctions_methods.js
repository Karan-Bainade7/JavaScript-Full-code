// JavaScript Functions
// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
myFunction();
  
function myname(){
    console.log("i am karan bainade");
    console.log("i rich person");
}
myname();

function my(msg){
    console.log(msg);
}
my("hello, to my javascript serice");


function sum(a,b){
   c=a+b;
   return c;
}
let output=sum(2,5);
console.log(output);


function sum(a,b){
    c=a+b;
    return c;
}
k=sum(3,4);
console.log(k);


// steps: to  excecute of Code
// 1.call function
// 2.mutiplication
// 3.rettun
// 4.go to let myout=...Addition..
// 5.pirnt myout


function Addition(x,y){
     z=x*y;
     return z;
}
let myout= Addition(2,1);
console.log(myout);

// arrow fucction use to comact way to solve 
let arrowadd=(a,b)=>{
    console.log(a+b);}

function myname(){
    console.log("my name is karan bainade");
    console.log("i am learning javascript");
}

// // myname();
// // myname();
// // myname(); //multiiple timte  use fuctions to call

function sum (x,y){
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);


let multiiple=(a,b)=>{
    console.log(a*b);
}

let sub=(x,y)=>{
    console.log(x-y);
}

const karan=(a,b)=>{
    console.log(a*b);
};


/*

Why Functions?
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.

The () Operator
The () operator invokes (calls) the function:

Example
Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
Accessing a function with incorrect parameters can return an incorrect answer:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();
Accessing a function without () returns the function and not the function result:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;
Note
As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.

Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Example
Instead of using a variable to store the return value of a function:

// let x = toCelsius(77);
// let text = "The temperature is " + x + " Celsius";
// You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";
You will learn a lot more about functions later in this tutorial.

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
} 

// code here can NOT use carName  
*/