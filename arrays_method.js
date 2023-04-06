
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
        review:4.9,
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


// push() -> Adding more datas in first data

var newData=
{
    name:'Taj',
    city:'Mumbai',
    review:4.6,
    veg:false,
}

restaurantList.push(newData);

console.log(restaurantList[2].review);

//***********OR we also add it like */

restaurantList.push({
    name:'Western',
    city:'pune',
    review:4.9,
    veg:true,
});

console.log(restaurantList[3]);


// forEach ->function is needed
// index is starts from 1

// function readData(value,index)
// {
//     console.log(value.city,index);
// }
// restaurantList.forEach(readData);

function readData(value){
    console.log(value.review);
}
restaurantList.forEach(readData);




// splice() -> splice is used to delete data

restaurantList.splice(0,1);

console.log(restaurantList);

// find() -> search single record

// var search='Mumbai';

// var result=restaurantList.find(function(value){
//     return value.name ==search;
// });

// console.log(result);

// var result=restaurantList.find(function(value){
//     return value.city==search;
// });

// console.log(result);


// filter() -> search multiple record or data with same value

var search='4.9';

var result=restaurantList.filter(function(value){
    return value.review==search;
});

console.log(result);

// map() -> creates new array , function is compulsory

// var newArray =restaurantList.map(function(value){
//     value.name="RT. "+value.name;
//     value.closetime="9:00 PM";
//     return  {
//         name:value.name,city:value.city,review:value.review, closetime:value.closetime
//     };
// });

// var newArray=restaurantList.map(function(value){
//     value.name="gov. "+value.name;
//     value.time="7:00 PM";
//     return{
//         name:value.name,time:value.time
//     };
// });

// console.log(newArray);



var newarray=restaurantList.map
    (function(value){
        value.name="Sheth "+value.name,
        value.city="NAshik "+value.city;
        return{
            name:value.name,city:value.city
        };
    });
console.log(newarray);


// join -> join symbols or string in between two data with remove comma

var newArrayString=restaurantList.join(" Dinesh ");
console.log(newArrayString);

var a="Dinesh ";
var b="Patil";
result=a+b;
console.log(result);


// includes -> used to search it will includes in our data or not , o/p will be true or false

var array = ["dinesh" , "Edureka" , 10,33,45,{name:"Patil"}];

var isIncluded= array.includes("dinesh");

console.log(isIncluded);


// Slice -> provides parts of an array , starts from 0

//  when we type only one number it will end to the last 

var SlicedArray= array.slice(1);
// var SlicedArray= array.slice(0,1); for two numbers
console.log(SlicedArray);



