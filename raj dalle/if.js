

let age= prompt("enter your age");

if(age>=18)
    {
    document.write("you can drive");
}
else
   { document.write("you can't drive");
}




const age1= document.getElementById("number.input");
const btn1= document.getElementById("btn1");
const head = document.getElementById("heading");
console.log(age1);
btn1.addEventListener("click",function(){
    if(age1.value>=18)
    {
        head.innerText="you can drive";
    }
    else
    {
        head.innerText="you can't drive";
    }
})