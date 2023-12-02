let sentence = ["Hello", "my", "name", "is", "Alisha"]
let greetingEl = document.getElementById("greeting-el")

var name=" "
for (let index = 0; index < sentence.length; index++) 
{
   name += sentence[index] + " "
   greetingEl.textContent = name

}