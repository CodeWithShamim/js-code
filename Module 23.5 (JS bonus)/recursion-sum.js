function isSum(i) {
    if (i == 5) {
        return 5;
    }
    return i + isSum(++i);

}
console.log(isSum(1));