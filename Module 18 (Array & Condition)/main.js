// Declare Array , Array length, Array index 
var friendsAgg = [15, 16, 17, 18, 19, "shamim", 20]
// change value from array
friendsAgg[5] = "Name change";

// console.log(friendsAgg)
// console.log(friendsAgg.length)
// console.log(friendsAgg[5])

// index 
// Indexof find index numbr from array 
var collect = friendsAgg.indexOf("shamim");
var collect2 = friendsAgg.indexOf("shamimmmmmmmm"); //-1 result because this item not available in this array
// console.log(collect);
// console.log(collect2);



//======================================== Add or remove element from array using push, pop

var items = ['shamim', "salam", "rafiq", "jabber"];
// console.log("Original items=", items);

// remove use pop
// collect pop items 
var collectpop = items.pop();
// console.log(collectpop)
// console.log(items);
// add push
items.push("New name");
// console.log(items);

//============================ shift, unshift==================


//========================== Compare variables and Comparison operator=========================================

// Conparison operators
/*
console.log(1 > 2);
console.log(1 < 2);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 >= 2);
console.log(1 <= 2);

// And
console.log(goodperson && goodstudent);
// Or
console.log(goodperson || goodstudent);

*/

// ===============================================if else statement ============================================

var age, items;
age = prompt("Enter your age: ",  "18");
if (age>=18){
    console.log("you can Vote now.")
}
else{
    console.log("You can't vote at this time.")
}

// ============================================================