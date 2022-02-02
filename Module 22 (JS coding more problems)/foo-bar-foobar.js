function divisibleBy(num){
    for (i=1; i<=num; i++){
        if (i%3==0 && i%5==0){
            console.log("Foobar");
        }
        else if(i%3==0){
            console.log("Foo");
        }
        else if(i%5==0){
            console.log("Bar");
        }
        else{
            console.log(i);
        }

    }
}

const myDivisible = divisibleBy(100);
