// 2! = 2 X 1 = 2
// 3! = 3 X 2 X 1 = 6
// 4! = 4 X 3 X 2 X 1 = 24
// 5! = 5 X 4 X 3 X 2 X 1 = 120
// 6! = 6 X 5 X 4 X 3 X 2 X 1 = 720
// 7! = 7 X 6 X 5 X 4 X 3 X 2 X 1 = 5040
function isFactorial(facNumber){
    let factorial = 1;
    for (let i=1; i<=facNumber; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let myFactorial = isFactorial(7);
console.log("Factorial value is : "+myFactorial);
