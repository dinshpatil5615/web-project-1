// Math -> By using math method we get all the math operations quickly.

console.log(Math.PI);

// here we get cube of 5 number
// which will be 5*5*5=25*5=125
var radius= 5;
var cube=Math.pow(radius,3);
console.log(cube);

// we also use his logic also
// var num=4;
// result=num*num*num;
// console.log(result);

// here we find squareroot of a number 

var value=49;
var squareroot=Math.sqrt(value);
console.log(squareroot);

// let's take an interesting example of OTP which is randomly change by refreshing a page

var value=Math.random();

// we use multiply by 10000 bcoz we want our value in four numbers it will give us less than 10000 values whcih is 9999
value *= 10000;

// 1 -> Math.Floor - 2.6 or 2.3 -> 2 will be printed

// 2 -> Math.ceil - 2.6 or 2.3 -> 3 will be print

// 3 -> Math.round - 2.49 -> 2 , 2.50 -> 3 will printed

// 4 -> Math.abs - 2.49 -> 2.49 , -2.50 -> 2.50 will printed
// it will printed absolutely same which we type and when we type in negative it will be printed positive

value= Math.floor(value);

console.log(value);