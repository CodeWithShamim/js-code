// ===============Passing parameter and return in Function=================== 
function totalAmount(taka){
    var itemsPrice = 10;
    var itemsQuantity = taka / itemsPrice;  
    return itemsQuantity;
}

// Call Function 
var money = 200;
var result = totalAmount(money);
console.log(result);