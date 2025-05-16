const products=[
    {
        id:1,name:"Product 1",price:20
    },{
        id:2,name:"Product 2",price:45  
    },
    {
        id:3,name:"Product 3",price:60
    },
];

let newPrice= products.map((price) => price+5);
 console.log(newPrice);