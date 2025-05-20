document.getElementById("submit").onClick= async function(){
    const email=document.getElementById("email").value;
    const result=document.getElementById("result");
    result.textContent="";
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users= await res.json();
        const data = users.find(value => value.email.toLowerCase() === email.toLowerCase());
        if(data){
            result.textContent="Name"+data.name
        }else{
            result.textContent="No user found with this email";
        }
    }catch(error){
        result.textContent="Error fetching data"
        console.error(error);
    }
}