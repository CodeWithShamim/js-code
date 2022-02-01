function isSumation(items){
    let largest = items[0];
    for (i=0; i<items.length; i++){
        let itemSum = items[i];
        if ( itemSum>largest){
            largest = itemSum;
        }            
    }
    return largest;
}
let numbers = [10, 20, 30, 40, 50, 600, 70, 80, 90, 100];
numbers = [-12, -6, -16];
let result = isSumation(numbers);
console.log("Largest number is: "+ result);