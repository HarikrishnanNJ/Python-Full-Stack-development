function conversion(){

    let letter1=parseInt(document.getElementById("letter1").value)

    let tometer=(letter1/3.281).toFixed(3)
    let tofeet=(letter1*3.281).toFixed(3)

    document.getElementById("result1").innerText=`${letter1}Meter=${tofeet}||${letter1}Feet=${tometer}`
    document.getElementById("letter1").value=" "

    let toliter=(letter1/0.264).toFixed(3)
    let togallon=(letter1*0.264).toFixed(3)

    document.getElementById("result2").innerText=`${letter1}Liter=${toliter}||${letter1}Gallon=${togallon}`
    document.getElementById("letter1").value=" "

    let tokilogram=(letter1/2.204).toFixed(3)
    let topound=(letter1*2.204).toFixed(3)

    document.getElementById("result3").innerText=`${letter1}Kilogram=${topound}||${letter1}Pound=${tokilogram}`
    document.getElementById("letter1").value=" "
    
}