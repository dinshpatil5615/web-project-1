// String Methods -> used only for Strings 

// 1 -> COnvert a string to lowercase or small letters 

var text="India is my Country"
var output= text.toLowerCase(text);
console.log(output);

// 2 -> COnvert a string to Uppercase or Capital letters 

var output= text.toUpperCase(text);
console.log(output);

// 3 -> split method we used it for split all data in array format it numberwise starts from 0 and it will split all string with another characters when we add space in between two "" then it will print how our text is -> see o/p

// we cannot type first touppercase and after join method bcoz touppercase is not appliacble for string not for array

var output= text.split(" ");
output= output.join("=");
output= output.toUpperCase();
console.log(output);

// we will type all the methods in one line also like
// this is called method chaining

var output=text.split(" ").join("+").toLowerCase();
console.log(output);


// get a part string  -> with using substring()
// substring is starts from 0 and end on index+1 means we want to get from 2 to 6 then we want to type 2 to 5 like this and in substring sapce will be measured from 0 to end.

// And when we type only one number in substring then it will stars from this number and end to last number diectly

var text=text.substring(4);
console.log(text);

// lastIndexOf -> it returns the index of last occurance of value in a string

var result=text.lastIndexOf("my");

console.log(result);

var result=text.indexOf("is");

console.log(result);
