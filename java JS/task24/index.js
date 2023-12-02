let sentence = ["Hello ", "my ", "name ", "is ", "Lismy"]


document.getElementById("button1").addEventListener('click',function(){

    var name=""
    for (let i = 0; i < sentence.length; i++) {
       name += sentence[i]     
       
    }
    document.getElementById("text").innerText=name
})