
var Student={
    name:"DineshPatil",
    course:"MCA",
    trainer:"Deepak",
    duration:"4 months"
}

console.log(Student);

// Collect all keys of an js object -> we get array keys with only keys printed

var allkeys= Object.keys(Student);

console.log(allkeys);


// Collect all Values of an js object -> we get array Values with only Values printed

var allvalues=Object.values(Student);

console.log(Student);

// convert js object to an array -> entries() is used to get multi dimension array like this
// [ [],[],[] ]

var entries= Object.entries(Student);

console.log(Student);

