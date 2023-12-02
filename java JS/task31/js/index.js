
function generate(){
    let text = document.getElementById("text1").value;
    let date2 = document.getElementById("date1").value;

    let dateParts = date2.split("-");
    let newDate = dateParts[2] + dateParts[1] + dateParts[0];

    console.log(dateParts)
    var asci=convertToAscii(text)
    console.log(asci)
    let result1= asci + 22092022
    let result2=newDate + 25092022 

     let finalResult= result1 + result2 

    function convertToAscii(text) {
        let ascii = "";
        for (let i = 0; i < text.length; i++) {
            ascii += text.charCodeAt(i) +"";
        }
        console.log(ascii)
        return ascii;
        
      }
      
document.getElementById("para2").textContent=finalResult;


}
