// DOM => 
// Doxumnet - webpage
// object - HTML element
// model - Way to handle data

// By id
var h1_id=document.getElementById("h1_id");
console.log(h1_id);

// By className
var h1_class=document.getElementsByClassName("h1_class");
console.log(h1_id);

// By TagName
var h1=document.getElementsByTagName("h1");
console.log(h1);

// By queryselector - get single element
var querysingle = document.querySelector("#h1_id");

console.log(querysingle);


// By queryselectorAll - get Multiple element
var  queryAll= document.querySelectorAll("#h1_id");

console.log(queryAll);


// InnerHTML - To set text from javascript to html we use innerHTML
// we will type .innerHTML in left side not for right side

var text= "I Am fine!";
h1_id.innerHTML=text;
console.log(text);

// when we want data in numbers we type a logic like this

// var text= h1_id.innerHTML;
// text=Number(text);
// console.log(text);


// Innertext - in innertext what we type it will be printed as it is in webpage

var text= "<i>I Am fine!</i>";
h1_id.innertext=text;
console.log(text);

// Event - Evenet is an user interaction

// var btn=document.querySelector("#btn");
// var h1=document.querySelector(".h1_class");

// btn.addEventListener("click",function(){
//     h1.innerHTML="<i>Bye bye!!!</i>";
//     btn.style.backgroundColor="yellow";
// });


// input text

var input=document.querySelector(".text");
var btn=document.querySelector("#btn");
var h1=document.querySelector(".h1_class");
input.addEventListener("keyup",function()
{
    var text=input.value;
    h1.innerHTML=text;
}
);

