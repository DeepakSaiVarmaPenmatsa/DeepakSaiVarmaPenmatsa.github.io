const products=[
    {id:1,name:"Banana",price:50},{
        id:2,name:"apple",price:30
    },{
        id:3,name:"orange",price:80
    },
];

const cart={1:7,3:5}

products.map((product) => {
    if(cart[products.id]){
        const total=product.price * cart[product.id];
        console.log(product.id,product.name.product.price,total);
    }
});