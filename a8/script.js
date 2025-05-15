const calc=(op) => {
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    switch(op){
        case "add":
        result.innerHTML="Addition" + add(n1,n2);
        break;

         case "subtract":
        result.innerHTML="Addition" + add(n1,n2);
        break;

         case "add":
        result.innerHTML="Subtraction" + subtract(n1,n2);
        break;

         case "multiply":
        result.innerHTML="Multiplication" + multiply(n1,n2);
        break;

         case "divide":
        result.innerHTML="Division" + divide(n1,n2);
        break;
    }
};

const add = (a,b) =>{
    return a+b;
};

const subtract= (a,b) => {
    return a-b;
};

const multiply= (a,b) => {
    return a*b;
};

const divide= (a,b) => {
    return a/b;
};
