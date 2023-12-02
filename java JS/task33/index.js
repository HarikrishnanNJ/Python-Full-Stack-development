let form1=document.getElementById("myForm")


form1.addEventListener("submit",(e)=>{

    e.preventDefault();

    var text1 = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name1 = document.getElementById('name').value;
    var message1=document.getElementById("paragraph1")


    if(!name1.match(text1)){
        message1.innerText="Name should be in char"
        // return false

       
    }else{
        message1.innerText=""
        
        document.getElementById("myForm").action = "section2";
        document.getElementById("display").innerText = "Thank you for sending us message We will get back to you shortly";

        document.getElementById("display").style.cssText = `
            width:100%;
            height:500px;
            background-color:#c3f7f4;
            color: #02373a;
            margin-top: 540px;
            text-align: center;
            padding-top:300px;
        `;
        return false
    }   

    var email=document.getElementById("emailVal")
    var phonenum=document.getElementById("phoneVal")


})