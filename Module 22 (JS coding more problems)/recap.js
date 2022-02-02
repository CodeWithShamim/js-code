function isLergest(numbers){
    let min = numbers[0];
    for (let i=1; i<numbers.length; i++){
        const element = numbers[i];
        if (element<min){
            min = element;
        };
    }
    console.log(min)
}

isLergest([10, 20, 30, 5, 40, 1, 50, 60]);