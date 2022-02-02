const numbers = [1, 1, 1, 2, 3, 4, 2, 2, 3 , 4, 5, 6, 7, 8, 9, 9, 9, 9, 5, 5, 5, 5, 5];
function removeDuplicate(numbers){
    let unique = [];
    // for (i=0; i<numbers.length; i++){
    //     let element = numbers[i];
    //     unique.push(element);
    // };
    // ==========for of system==========
    for ( const element of numbers){
        console.log(element);

        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    };

    return unique;
   
}

let myUnique = removeDuplicate(numbers);
console.log("Remove duplicate result is: "+myUnique);
