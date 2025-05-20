const products = [
    {id:1,product:"p1",price:34},
    {id:2,product:"p2",price:50},
    {id:3,product:"p3",price:45},
];

const cart={1:4,3:5};
const totalVal=products.reduce((sum,value) => {
    const qty = cart[value.id] ?? 0;
    return sum + value.price * qty;
},0);
console.log("Total qty:"+totalVal);

