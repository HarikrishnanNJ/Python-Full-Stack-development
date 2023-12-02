
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var name1 = document.getElementById("name").value;
    var emailN = document.getElementById("email1").value;
    var phone1 = document.getElementById("phone").value;
    var message1 = document.getElementById("paragraph1")
    // var message2 = document.getElementById("paragraph2")
    // var message3 = document.getElementById("paragraph3")
    const regex = /^[A-Za-z]+$/;
    
    if (name1 == "") {
        document.getElementById("paragraph1").innerText = "name should not be blank"
       

    }
    if ( emailN == "") {
        document.getElementById("paragraph2").innerText = "Email should not be blank"
        

    }
    if ( phone1 == "") {
        document.getElementById("paragraph3").innerText = "Phone No should not be blank"
        

    }
 
    if (!regex.test(name1)) {

        message1.innerText = "Name should be in char"
        return false;

    }
    
    else {
                      
        document.getElementById("display").innerHTML = " <h1 class='success'>Thank you for sending us message We will get back to you shortly </h1> "
    }

})






