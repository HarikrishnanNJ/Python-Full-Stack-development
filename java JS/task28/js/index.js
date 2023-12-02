let num1=0
document.getElementById("num").innerText=num1


 function increment() {
       num1+=1
    document.getElementById("num").innerText=num1
    if(num1>=1)
    {
        document.getElementById("btn1").disabled=false
        document.getElementById("btn3").disabled=false
    }
    
 }

 function decrement() {
    num1-=1
    document.getElementById("num").innerText=num1
    if(num1===0)
    {
        document.getElementById("btn1").disabled=true
        document.getElementById("btn3").disabled=true
    }
    
    
 }
