document.getElementById("button1").addEventListener("click",function(){

    let data=document.getElementById("text1").value
    localStorage.setItem("color",data)
    document.getElementById("text1").value=""

    // localStorage.setItem("Name","Lismy")
    // localStorage.setItem("Age","23")
    // localStorage.setItem("fruit","Orange")
})

document.getElementById("button2").addEventListener("click",function(){

    document.getElementById("display").innerText=localStorage.getItem("color")

})

document.getElementById("button3").addEventListener("click",function(){

    localStorage.removeItem("color")

})

document.getElementById("button4").addEventListener("click",function(){

    localStorage.clear()

})