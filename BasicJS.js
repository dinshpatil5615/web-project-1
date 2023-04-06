// datatypes with the help of examples

var restoName = "KFC";
var price = 500;
var veg = false;
var restolocation = null;
var city = undefined;

console.log(restoName, price, veg, restolocation, city);
console.log(typeof restoName, typeof price, typeof veg, typeof restolocation, typeof city);


// operators

// 1 -> arithmetic operators -> + , - , * , / , %

var result = 10 + 20;
var result1 = 10 - 20;
var result2 = 10 * 20;
var result3 = 10 / 20;
var result4 = 10 % 20;

console.log(result, result1, result2, result3, result4);

// 2 -> Comparison operators -> == , < , > , <= , >= , !=

var a = 10;
var b = 20;

if (a != b) {
    console.log('Yes');
} else {
    console.log('no');
}

// 3 -> Assignment operators -> += , -= , /= , *= , %=

var number = 10;
++number;
// number -= 10;
// number /= 10;
// number *= 15;

console.log(number);

// 4 -> Logical operators -> AND -> && , OR -> || , NOT -> !

var a = 8;
var b = 12;
var c = 12;

if (a == b || b == c) {
    console.log("all are equal");
}
else {
    console.log("not equal");
}

// true is not equal to false , hence when we type not equal to true o/p will be false and not equal to false will be given o/p is true

var n = false;
n = !n;
console.log(n);


// conditional statements


//if ...else if ...else statements 

var studentAssign = true;

if (studentAssign = true) {
    console.log("Yes")
}
else {
    console.log("No")
}

var allAssign = 10;
var studentsubmitted = 4;

if (allAssign == studentsubmitted) {
    console.log("Excellent")
}
else if (allAssign > studentsubmitted && studentsubmitted >= 5) {
    console.log("Good")
}

else {
    console.log("Bad")
}

// switch case statements

var assigncompleted = 4;

switch (assigncompleted) {
    case 1:
        console.log('Assignment 1 completed');
        break;
    case 2:
        console.log('Assignment 2 completed');
        break;
    case 3:
        console.log('Assignment 3 completed');
        break;
    case 4:
        console.log('Assignment 4 completed');
        break;
    case 5:
        console.log('Assignment 5 completed');
        break;
    default:
        console.log('Invalid');
        break;
}

// loops

// 1 -> for loop

for (var i = 1; i <= 10; i++) {
    console.log(i, 'for loop');
}

// 2 -> while loop

var m = 10;
while (m >= 1) {
    console.log(m, 'while loop');
    m--;
}

// 3 -> do while loop

var n = 5;
do {
    console.log(n, 'do while loop');
    n--;
} while (n >= 0);

// Functions


function add(m, n) {
    var result = m + n;
    console.log(result);
}
var p = 20;
var q = 30;

add(p, q);

var a = 5;
var b = 8;

add(a, b);

var m = 50;
var n = 30;

add(m, n);

// Array -> Most important

var number = [100, 200, 300];
console.log(number.length);

var string = [11, "dinesh", null, false, a, [1, 2, 3]];
console.log(string);
console.log(Array[1]);

// Objects -> {}

var main = { Age: 20, Roll_no: 18, Marks: 78 };
console.log(main);
// type .age for get age , .Roll_no like this after main means main.Age


// console.log(RestoList);

var restaurantList=[
    {
        name:'JW',
        city:'pune',
        review:4.3,
        veg:true,
    },
    {
        name:'Ritz',
        city:'pune',
        review:4.7,
        veg:false,
    }
    // {
    //     name:'Western',
    //     city:'pune',
    //     review:4.9,
    //     veg:true,
    // }
]
console.log(restaurantList[1].name);


