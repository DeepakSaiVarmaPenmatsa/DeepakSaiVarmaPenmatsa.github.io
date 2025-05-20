
const cart={1:4,3:5}
const products = [
   { id:1,name:"p1",price:34},
   { id:2,name:"p2",price:41},
   { id:3,name:"p3",price:50},
];

add(products)

function add(...values){
    const totalVal = values.reduce((sum,value) =>{
        if(cart[products.id]){
            const total = cart.value*products.price;
            console.log()
        }
    })
}