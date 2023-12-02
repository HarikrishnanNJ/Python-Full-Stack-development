
function convert() {

   var inputValue=parseInt(document.getElementById("input").value)  
   
   // 1 meter = 3.281 feet
   let toFeet=(inputValue*3.281).toFixed(3)
   let toMeter=(inputValue/3.281).toFixed(3)
   // 4 Meter = 13.124 Feet || 4 Feet = 1.219 Meter
   document.getElementById("result1").innerText=`${inputValue} Meter = ${toFeet} Feet || ${inputValue} Feet = ${toMeter} Meter`
   

   // 1 liter = 0.264 gallon
   let toGallon=(inputValue*0.264).toFixed(3)
   let toLiter=(inputValue/0.264).toFixed(3)
   document.getElementById("result2").innerText=`${inputValue} Liter = ${toGallon} Gallon || ${inputValue} Gallon = ${toLiter} Liter`
   

   // 1 kilogram = 2.204 pound
   let toPound=(inputValue* 2.204 ).toFixed(3)
   let toKilogram=(inputValue/2.204).toFixed(3)
   document.getElementById("result3").innerText=`${inputValue} kilogram  = ${toPound} pound || ${inputValue} pound = ${toKilogram} kilogram `
   document.getElementById("input").value = " "

   
}