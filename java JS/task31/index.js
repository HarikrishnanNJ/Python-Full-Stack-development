function generate(){

    let text = document.getElementById("text1").value
    let date1 = document.getElementById("date").value;
// remove hyphens from date and convert day month year format
    let dateconv = date1.split("-");
    let newDate = dateconv[2] + dateconv[1] + dateconv[0];

// string to ascii conversion
    let convertName=""
    for (let i = 0; i < text.length; i++) {
        convertName += text.charCodeAt(i);
    }
    let asciiName=parseInt(convertName)

// fibnal result
    let result1 =asciiName+22092022  
    let result2=newDate+25092022 
    let finalResult=result1+result2
    console.log(result1+result2);

document.getElementById("result").textContent=finalResult;
document.getElementById("text1").value=""

}