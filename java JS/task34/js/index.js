function display() {
    

let password=document.getElementById("pass").value;

var Char = /[a-zA-Z]/.test(password);
var Number = /\d/.test(password);
var SpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-/\\|'"`]./.test(password);


  if(Char && Number && SpecialChar && password.length>12){
    document.getElementById("para").innerText="strong ";
    document.getElementById("para").style.color="green";
   
  }

    else if(Char && Number && SpecialChar ){
        document.getElementById("para").innerText="medium ";
        document.getElementById("para").style.color="orange";
     
    }


else{
    document.getElementById("para").innerText="weak"
    document.getElementById("para").style.color="red";
  }

}