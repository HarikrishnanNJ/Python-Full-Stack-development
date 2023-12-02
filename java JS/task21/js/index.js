var num1=prompt("enter first number 1")
var num2=prompt("enter first number 2")

var new1=parseInt(num1)
var new2=parseInt(num2)
console.log(new1)
console.log(new2)
if (new1>new2) {
    console.log("largest no is " + new1)   
}
else if(new2>new1)
{
    console.log("largest no is " + new2)
}
else{
    console.log("both numbers are equall")
}