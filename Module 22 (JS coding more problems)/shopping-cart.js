const products =[
    {name: "Laptop", price: 90000, quantity: 1},
    {name: "Pants", price: 4000, quantity: 8},
    {name: "Shirts", price: 6000, quantity: 3},
    {name: "watch", price: 10000, quantity: 2},
    {name: "Phone", price: 45000, quantity: 1}
];

let totalCart = 0;
for (const product of products){
    const productTotalPrice = product.price * product.quantity;
    totalCart = totalCart + productTotalPrice;
}
console.log(totalCart);