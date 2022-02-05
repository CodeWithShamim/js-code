function isRecursion(i) {
    if (i > 100) {
        return;
    }
    console.log(i);
    isRecursion(i + 2);
}
isRecursion(1);