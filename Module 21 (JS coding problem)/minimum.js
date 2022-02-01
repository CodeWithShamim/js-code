function isMaxNumber(a, b, c){
    if (a<b && a<c){
        return a;
    }
    else if (b<a && b<c){
        return b;
    }
    
    else{
        return c;
    }
}

var myNumber = isMaxNumber(10, 30, 20);
var myNumber = isMaxNumber(50, 30, 20);
var myNumber = isMaxNumber(50, 30, 70);
console.log(myNumber);