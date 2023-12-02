let sentence = ["Hello", "my", "name", "is", "Sinju"]
document.getElementById("message").addEventListener(`click`,function(){
    name=""
    for (let i = 0; i < sentence.length; i++) {
    name += sentence[i] +" "
    }
    document.getElementById("output").innerText=name

}) 
 