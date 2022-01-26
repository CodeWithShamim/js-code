// Variable declaraton
var onionPrice = 110;
var eggPrice = 50;
var totalPriceAdd = onionPrice + eggPrice;
var totalPriceSub = onionPrice - eggPrice;
var totalPriceMul = onionPrice * eggPrice;
var totalPriceDiv = onionPrice / eggPrice;
var totalPriceModu = onionPrice % eggPrice;
var totalPriceEx = onionPrice ** eggPrice;

console.log(totalPriceAdd, totalPriceSub, totalPriceMul, totalPriceDiv, totalPriceModu,totalPriceEx)
// console.log(totalPriceSub)
// console.log(totalPriceMul)
// console.log(totalPriceDiv)
// console.log(totalPriceEx)

//============================= Mathematical operation shorthand

var price1 = 100;
// var not use for this item
// it's shorthand
price1 =+ 200;
var price2 = 50;
// var not use for this item
// it's shorthand
price2 -= 10;
var sum = price1+price2
console.log(sum)


var age =19;
// increment
age++;
age += 1;
age--;
console.log(age)


// String concatenation
var firstName = "shamim";
var lastName = "islam";

var concat = firstName + ' ' + lastName
console.log(concat)


// integer 
var age = 22;
// Float 
var age = 22.22

var onionPrice = '50.76';
var eggPrice = '10.6';

// convert string to integer/float 
onionPrice = parseInt(onionPrice);
eggPrice = parseFloat(eggPrice);
console.log(onionPrice);
console.log(eggPrice);



// typeof (find Datatype)
var name = 'shamim';
var age = 20;
var status = true;
var hello;

console.log(typeof name)
console.log(typeof age)
console.log(typeof status)
console.log(typeof hello)

// Date declare
var today = new Date();
console.log(today)

// special editon toFixed
var fnumber = 0.1;
var lnumber = 0.2;
var total = fnumber + lnumber;
// console.log(total.toFixed(1))
total = total.toFixed(1)
total = parseFloat(total)
console.log(total)