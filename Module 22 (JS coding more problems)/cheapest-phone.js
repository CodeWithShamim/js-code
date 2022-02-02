// Using Array of object 
const phones = [
    {name: "iphone", price: 98000, camera: 10, storage: 32},
    {name: "samsungV99", price: 40000, camera: 10, storage: 32},
    {name: "oppoA12", price: 30000, camera: 10, storage: 32},
    {name: "iphonePro", price: 120000, camera: 10, storage: 32},
    {name: "vivoA20", price: 55000, camera: 10, storage: 32},
    {name: "LG W31/+	", price: 33000, camera: 10, storage: 32},
    {name: "LG W41/+/Pro	", price: 45000, camera: 10, storage: 32},
    {name: "Huawei P30", price: 65000, camera: 10, storage: 32}
];

let cheapest = phones[0];
for (const phone of phones){
    if (phone.price<cheapest.price){
        cheapest = phone;
    }
};
console.log(cheapest);