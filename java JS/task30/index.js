
arr=[];

function add(){
    let data=document.getElementById("input1").value
    arr.push(data);
    console.log(arr)

    localStorage.setItem("myPlanner",JSON.stringify(arr))
    var list=document.createElement("li");
    var btn2 =document.createElement("button");
    btn2.innerText="delete"
    btn2.className="btn2";

    for (let i = 0; i < arr.length; i++) {
        list.innerText=arr[i]
        list.append(btn2)
        document.getElementById("items").append(list)  
       
    }

    btn2.onclick=function(){

        var my=JSON.parse(localStorage.getItem("myplanner")); 
        alert(btn2)
        var index = my.indexOf(data);
        console.log(data)
    
        my.splice(index, 1);
        
        localStorage.setItem('myplanner',JSON.stringify(my))
        list.remove(); 
    }
    document.getElementById("input1").value=""

}


