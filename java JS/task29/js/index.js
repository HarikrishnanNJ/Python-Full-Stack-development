

function add() {
    let data=document.getElementById("text1").value
    // localStorage.setItem("name","hari")
    // localStorage.setItem("age","23")
    // localStorage.setItem("place","angamaly")
    
    localStorage.setItem("color",data)
   
    document.getElementById("text1").value=""
}

function read() {
    document.getElementById("display").innerText=localStorage.getItem("color")
    
}
function remove() {
    localStorage.removeItem("color")
   
}
function clearlocal() {
    localStorage.clear()
    
}