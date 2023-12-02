arr=[];

function add1(){
    let data=document.getElementById("text1").value
    arr.push(data);
    console.log(arr)

    localStorage.setItem("myPlanner",JSON.stringify(arr))

    document.getElementById("text1").value=" "

    var list = document.createElement("li");
    var btn1 = document.createElement("button");
    btn1.innerText="Delete"
    // btn1.className = "btn";

for (let i = 0; i < arr.length; i++) {
    list.innerText=arr[i]
    list.append(btn1)
    document.getElementById("items").append(list)
     
}
btn1.onclick=function(){
    
    var my=JSON.parse(localStorage.getItem("myplanner")); 
    console.log(my)
    var index = my.indexOf(data);
    console.log(data)

    my.splice(index, 1);
    
    localStorage.setItem('myplanner',JSON.stringify(my))
    list.remove();  
 }
 


}


