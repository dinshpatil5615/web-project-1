
// create a date
var date=new Date();

// get a date first and get perfect date

var output=date.toDateString();
console.log(output);


// get a date only

var output=date.getDate();
console.log(output);

// get a month only -> starts from 0 -> jan=0 , dec=11.
// we get o/p in number format

var months=["jan","feb","mar","april"];
var output=date.getMonth();
console.log(months[output]);


// get a year only

var output=date.getFullYear();
console.log(output);

// get a day only -> starts from 0 -> sun=0 , sat=6.

var output=date.getDay();
console.log(output);

// get current hour -> 24 hour watch

var output=date.getHours();
console.log(output);

// get current min

var output=date.getMinutes();
console.log(output);

// get current seconds

var output=date.getSeconds();
console.log(output);

