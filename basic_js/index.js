/* //console
console.log("hey its me Saugat");
console.error("Eya Khatra cha hae");
console.table([[12,12,12],[10,12,13]]);
console.clear();
console.warn("Eya na aaija hae")

// Keyword, variable and DataTypes

// console.log(x);
console.log(y);
let x=12;
var y = 10;

//Datatypes
console.log(typeof("Saugat"));
console.log(typeof(123));
console.log(typeof("1"+1));
console.log(typeof("1"*1+1));
console.log(typeof(undefined));
//--> Boolean
//--> Object

//Operators
// -->Arithemetic Operator

// 5 + 5 = 10     // Addition
// 10 - 5 = 5     // Subtraction
// 5 * 10 = 50    // Multiplication
// 10 / 5 = 2     // Division
// 10 % 5 = 0     // Modulo

// Comparison Operator

1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === '1'; // false

// Logical Operator
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true 

//Terniary operator

// condition ? true : false;

const num = 23;

if (num%2==0){
    console.log(`${num} is even`); //true
}else{
    console.log(`${num} is odd`); //false
}

// condition ? true : false;
num % 2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);

 */
// --> Switch

// const course = "backend";
// switch(course){
//     case "backend":
//         console.log("I am at Backend Class");
//         break;
//     case "fronted":
//         console.log("I am at Fronted Class");
//         break;
//     default:
//         console.log("Happy Learning!!!")
// }


// Loop
// for while do-while

for(let i=0;i<9;i++){
    // kei kura print or execute
}

// while loop

// let number = 11;
// let condition = true;

// while(condition){
//     console.log(number)
//     if(number % 2 == 0) {
//         condition = false;
//     }
//     number += 1;
// }

//post increment 
//pre increment number = 12
// console.log(number++); //  12 number=13
// console.log(++number); //14

// do{

// }while(condition);

// for in and for of
// const name = ["ram","shyam","hari"];
// for (let index in name){ //
//     console.log(name[index]);
// }

// for(let value of name){
//     console.log(value)
// }


// Problem solving + Langauge  
// while(1){
//     console.log("I am checking While loop")
// }


// Function

// function CallName(name){ //
//     console.log(`My name is ${name}`);
// };

// CallName("Saugat");
// CallName("Hari");

 const something = function (){

 };

 const valueFunction = ()=>{

 };
// arrow function
/* function CallName(name){ //
    console.log(`My name is ${name}`);
}; */

// const CallName2 = (name)=>{
//     console.log(`My name is ${name}`);
// }

// IIFE

((name)=>{
    console.log(`My name is ${name}`);
})("Hari")
(function (){
    console.log("Something is here")
})()
// Callback;

const checkEven = (number)=>{
    const value = number % 2 == 0 ? true : false;
    return value; 
}

function printMessage(IsEven,num){
    IsEven(num) ? console.log(`${num} is even`) : console.log(`${num} is odd`);
};

printMessage(checkEven,23);

// Scope of varibale

// let name = "Saugat";

let name = "saugat"
if(true){
    let name = "Nike";
    console.log(name);
}
console.log(name) // --> saugat

let counter = 0;

function Count(){
    let counter = 0;
    counter += 1;
    console.log(counter)
}

Count(); //1
Count(); //2
Count(); //3

// function 4 digit otp return

// random number generate
// validation --> 4 digit ko nae hunu paryo --> number convert string

function otpGenerate(){
    const value = Math.floor(Math.random() * 10000);
    if(value.toString().length !== 4) return otpGenerate();
    return value;
}

console.log(otpGenerate());