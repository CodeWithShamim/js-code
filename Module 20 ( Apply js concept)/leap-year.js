function isLeapYear(year){
    if (year%4 == 0 && year%100 != 0 || year%400 == 0){
        return "Yeah!! This year is Leap-year!"
    }
    return "Ohh!! This year is not Leap-year!"
}

let myYear = isLeapYear(2100);
console.log(myYear);