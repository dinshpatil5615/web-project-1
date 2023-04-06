// Q-2 -> a. Calculate the total number of orders placed for the restaurant?.  Expected Output for 2.a:Total number of orders placed = 199 

orderData =
    { 'Below 500': 20,'500-1000': 29,
    '1000-1500': 30, '1500-2000': 44, 
    'Above 2000': 76 };  

// Q-2 -> a - Answer 

var output=Object.values(orderData);
console.log(output);
 var output 

// Q-2 -> b. Calculate the number of order proportion options. Expected Output for 2.b:Total number of order proportions = 5

// Q-2 -> b - Answer 

var output=Object.keys(orderData);
console.log(output.length);


// Q-2 ->  c. Calculate the percentage of each proportion in below format:


// Q-3 -> Calculate the percentage of each proportion in below format:Expected Output for Question 2.c: Array of Objects[{id: 1,order: "Below 500",order percentage: "10.05",restaurant: "Punjabi Tadka

var data=
[{
    id:1,
    order: "Below 500",
    orderpercentage: "10.05",restaurant: "Punjabi Tadka",
},
{
    id:2,
    order: "500-1000",
    orderpercentage: "14.57",restaurant: "Punjabi Tadka",
},
{
    id: 3,
    order: "1500-2000",
    orderpercentage: "15.08",restaurant: "Punjabi Tadka"
},
{
    id: 4,
    order: "1500-2000",
    orderpercentage: "22.11",restaurant: "Punjabi Tadka"
},
{
    id: 5,
    order: "Above 2000",
    orderpercentage: "38.19",restaurant: "Punjabi Tadka"
}
]

console.log(data);