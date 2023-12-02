let num1=8
let num2=2

document.getElementById("num1").innerText=num1
document.getElementById("num2").innerText=num2

function addNumber(){
    let result=num1+num2
    document.getElementById("result").innerText=`sum:${result}`
}
function substract(){
    let result=num1-num2
    document.getElementById("result").innerText=`sub:${result}`
}
function divide(){
    let result=num1/num2
    document.getElementById("result").innerText=`divide:${result}`
}
function multiply(){
    let result=num1*num2
    document.getElementById("result").innerText=`mul:${result}`
}

