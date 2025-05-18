const products=[
    { id: 1, name: "product1", qty:3, price: 34, status:"pending"},
    { id : 2, name: "product2", qty:5,  price: 56, status:"pending"},
    { id : 3, name: "product3", qty:2, price: 43, status:"pending"},

];
const ins = products.filter(product=>product.qty>2).map((product)=>({
    ...product,
    price:product.price+5, 
    status: "completed", 
    total:product.price*product.qty})
);
console.log(ins)
//products.foreach((product) => console.log(product.name))