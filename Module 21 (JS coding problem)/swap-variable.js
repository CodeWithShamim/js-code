var a, b, temp;
a = 10;
b = 20;
console.log("Before a result is: "+a)
console.log("Before b result is: "+b)
// temp = a;
// a = b;
// b = temp;
// console.log("After a result is: "+a);
// console.log("After b result is: "+b);

// destructuring
[a, b] = [b, a];
console.log("After a result is: "+a);
console.log("After b result is: "+b);