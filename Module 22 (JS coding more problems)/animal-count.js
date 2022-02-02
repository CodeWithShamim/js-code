/* First10Miles = 10
   Second10Miles = 50
   RestMiles = 100
*/
function animalCount(miles){
    if (miles<=10){
        const first10Miles = miles * 10;
        return first10Miles;
    }
    else if (miles<=20){
        const firstAndSecond = 10 * 10;
        const sub10Miles = miles - 10;
        const second10Miles = sub10Miles *50;
        const totalSecond10Miles = second10Miles + firstAndSecond;
        return totalSecond10Miles  ;  
    }
    else{
        const first = 10 * 10;
        const second = 10 * 50;
        const sub20Miles = miles - 20;
        const restMiles = sub20Miles *100;
        const totalRest10Miles = first + second + restMiles;
        return totalRest10Miles ;
    }     
    
}

const animals = animalCount(21);
console.log(animals);
