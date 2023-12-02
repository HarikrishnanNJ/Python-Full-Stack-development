document.getElementById("paragraph1").innerText="Nike Sneakers $400"

let num=0

document.getElementById("num").innerText=num

function decrement(){
   
    num-=1
    document.getElementById("num").innerText=num
    if(num===0){
        document.getElementById("min-button1").disabled=true
        document.getElementById("button1").disabled=true
    }
   
}
function increment(){

    num += 1
    document.getElementById("num").innerText=num  
    if(num>=1){
        document.getElementById("min-button1").disabled=false
        document.getElementById("button1").disabled=false
    }
}