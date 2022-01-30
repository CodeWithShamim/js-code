function evenOddCal(numbers){
    if (numbers%2 == 0){
        return "this is Even number: "+numbers;
    }

    return "this is Odd number: "+numbers;


}

let numberInput = evenOddCal(199);
console.log(numberInput);