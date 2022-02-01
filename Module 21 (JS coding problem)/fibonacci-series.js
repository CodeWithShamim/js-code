// fibonacci number: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
/*
3rd = 2nd + 1st (3rd = 1-2)
4th = 3rd + 2nd
5th = 4th + 3rd
--------------
--------------
16th = 15th + 14th
------------------
nth = (n-1)th + (n-2)th
*/

function isFibonacci(){
    const fibo = [0, 1];
    for (i=2; i<=20; i++){  
        fibo[i] = fibo[i-1] + fibo[i-2];  
    };

    return fibo;
}

let result = isFibonacci();
console.log(result);
