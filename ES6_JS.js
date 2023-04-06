// use of LET AND CONST keyword

// let keyword

// we use let keyword only once for single value to perform the data when we type another let and type value of that let erroe will be given error will be like redeclaration of let a

// let a=10;
// let a=10;
// console.log(a);

// Const keyword

// const keyword will be used for getting a constant value to the javascript means when we type any data of keyword is const it will not change anywhere when you change in your program

// const b=55;
// const b=33;
// console.log(b);

// const and let both are the block scope keywords
// block scope is which we type in loop or if else condition it will not work

// let is the function scope keyword
// function scope is which are in between or the function

// For eg

let b=30;
const c=40;

if(a=20){
    var a=10;

// console.log(a);
// console.log(b);
// console.log(c);
}
console.log(a);

// here we will see when we type let and const keyword in between condition it will not applicable and error will form

// but when we use var keyword anywhere output will be printed

// Template string -> with the help of template string we can connect multiple string of data in one one line.

// we also called it string interpolation
// ` - this is backtick

let text1="welcome to edureka";
let text2="and this is a";
let text3="MERN stack course";

let finalText=`${text1} 
${text2} 
${text3}`;

console.log(finalText);


// destructuring -> destructuring is oftenly use for industry purpose for react
// destructuring means js expression that makes it possible to unpack values from array or properties from objects into distinct variables
// we can extract data from arrays & objects and assign them to variables

let cities=['pune','mumbai','nashik','nagpur'];

let[city1,,city2,rest]=cities;

console.log(city1,city2,rest);

// destructuring JSObject

let main={
    rName:'hotel shri',
    cost:'500',
    location:'pune',
    state:'maharashtra',
};
let{cost:Price,state}=main;
delete main.cost;
// we will rename any data with the help of ":" operator and delete with typing object name . what we want to delete
console.log(Price);
console.log(state);


// Spread operators -> Used to recreate or merge an array
// we easily merge two arrays with ... (spread operators)

let one=[10,20,30,40,50];
let two=[111,112,113,114];

// we use concat in ES5 like that

// let three=one.concat(two);
// console.log(three);

// we use spread operators in ES6

let three=[...one,...two];

console.log(three);


// string , number and boolean -> primative types
// array and objects -> non primitive types

var a=[10,20,30];
var e=[...a];
a[1]='edureka';

// here e recreates array of a means only a values will be changed not e values will changed

console.log(a);
console.log(e);


// Rest parameters -> collect unlimited parameters of data

// in ES5 we sum two numbers with the function like this

// function add(one,two) 
// {
//     console.log(one+two);    
// }
// add(70,70);


// but in ES6 we will use function for add two numbers we use logic like this

function add(...data) 
{
    let result=0;
    data.forEach(function
    (value)
    {
        result += value;
    });
    console.log("Sum is=",result);
}

add(50,20,30);


// Class -> Concept of oops , makes code protected
// for use of class we need object of class its compulsory
// Class is instance of object , class is blueprint of object 
// Class is collection of properties and methods
// first letter of class must always be capital

// class Myclass{
//     text='hello'; //property

//     alert(){
//         console.log("Alert"); //Method
//     }
// }

// when we see the alert will not working 
// to create object we declare name of it and we use 'new' keyword for create object
// Myclass() used for constructor
// "this" keyword is used for access properties and method in class


// Class inheritance

// class square{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     main(){
//         console.log("Square will be ",width*height);
//     }
// }

// let see=new square(10,20);
// see.main();

class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name,"is cheering");
    }
    shout(){
        console.log(this.name,"is barking");
    }
}

let ani=new Animal("Bruno","Black");
// let m=new Monkey("chimpu","Orange");


class Monkey extends Animal{}

let m=new Monkey("chimpu","Orange");

m.shout();
m.run();


// Arrow function -> () => {}

// arrow function will negotiated more lines of code and get us function in less amount of line code , we se function with not typing function with arrow function


(...data) =>
{
    let result=0;
    data.forEach(function
    (value)
    {
        result += value;
    });
    console.log("Sum is=",result);
}

add(50,20,330);


// SetTimeout -> we set time for printing an output in our code in seconds with typing milliseconds
// 1 second -> 1000 milliseconds

class New{
    hi="Hi";
    main(){
        setTimeout(() => {
            console.log(this.hi);
        }, 5000);
    }
}

let bye= new New();
bye.main();


// SetInterval -> it will be run again and again. settimeout will runs only once. setinterval print output on any one second


class New2{
    hi="Hi";
    main(){
        setInterval(() => {
            console.log(this.hi);
        }, 1000);
    }
}

let no= new New2();
no.main();


// Asynchronous Method -> setTimeout and setInterval are asynchronous in nature.asynchronous will not default in javascript. asynchronous will on line 2 and synchronous will on line 3 then first line 3 will print and after that line 2 will be print bcoz first syncronous will rint in javascript bcoz its default.

// Synchronous method -> It will follows sequesnce of execution. Then it will be syncronous code
// javascript is synchronous in nature bcoz when we will type synchronous code then it will print the output line by line which we type in our code

// Event loop -> synchronous to asynchronous

// Event loop have asynchronous API(application programming interface)
// ie. DOM , setTimeout, setInterval, Promises(Asynchronous) , fetch , xhr

// lets take an example how first synchronous printed and after that asynchronous printed

console.log("hello");//Synchronous
setTimeout(() => {
    console.log("1223");//Asynchronous
}, 1000);
console.log("Edureka");//Synchronous

// here we will see first all the synchronous programs will be print and after that asynchronous will be printed


// Promises -> promise means either promise will be resolved or promise will rejected.
// for eg -> we will have lec tomorrow at 5 pm
// available -> session will be there -> true-> resolved means run-> and then() or try{}
// Not available -> session will get cancelled -> rejected means not run or false -> .catch() or catch(){}

// for eg ->

// async function div(numberOne,numberTwo){
//     if(numberTwo==0){
//         return Promise.reject("cant divide number by zero");
//     }
//     else{
//         let result= numberOne/numberTwo;
//         return Promise.resolve(result);
//     }//all is well
// }

// div(10,0)
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });


