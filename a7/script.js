function calculateAll(){
    var a=Number(document.getElementById("num1").value); 
    var b=Number(document.getElementById("num2").value);
    var sum=a+b;
    var dif=a-b;
    var mul=a*b;
    //var div=a/b;
   document.getElementById("result").innerHTML=
   "Addition:"+ sum +"<br>"+"Difference"+dif+"<br>"+"Multiplication:"+mul;

}