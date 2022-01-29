// Declare object 
var student = {
    id:101,
    name:"shamim",
    semester:"4th",
    depertment:"computer",
    shift:"1st",
    group:"B"
}

var result = student.name;
result = student["name"];
console.log("Before result: "+result);

// different way to Set a object properties value
result = student.name = "salman";
student["name"] = "Rafiq";
console.log("After result: "+student.name);
