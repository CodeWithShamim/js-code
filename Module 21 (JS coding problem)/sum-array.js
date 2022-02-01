function isSumation(items){
    let sum = 0;
    for (i=0; i<items.length; i++){
        let itemSum = items[i];
        sum = sum +itemSum;
        
    }
    return sum;
}
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let result = isSumation(numbers);
console.log("Total sumation is: "+ result);