function checkPassword() {

    const password=document.getElementById("pass").value 
    const message=document.getElementById("strength") 
    
    
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])/.test(password)) {
    
        if (password.length>12){
            message.className="strong"
            message.innerText="Strong"
        }else{
            message.className="medium"
            message.innerText="Medium"
        } 
    }
        else {
        message.className="weak"
        message.innerText="Weak"
    }
    
    }