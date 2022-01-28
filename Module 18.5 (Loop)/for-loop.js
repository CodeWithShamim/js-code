// For loop=============================

// for (var i = 1; i <= 10; i++){
//     console.log("this number: "+ i);
// }

var i, sum, result;
sum = 0;
var numbers = [10, 20, 30, 40, 50, 60, 70, 80 ,90]
for (i = 0; i <numbers.length; i++){
    console.log("Array items is: "+ numbers[i])
    result = numbers[i];
    sum = sum + result;  
}
console.log("Sumation: "+ sum)