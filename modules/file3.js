// require("./file1"); --> type: commonjs
// import "./file1"; --> type: es6 or module
import Summation from "./file1.js";
const number1 = 10;
const number2 = 20;

const result = Summation(number1,number2);
console.log(result);