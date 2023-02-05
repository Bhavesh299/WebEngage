function check(){

    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    if(email.length == 0){
        alert("Required email address");
    }
    else if(email.length > 1){
        var flag = true;
        for(var i=0; i < email.length; i++){
            if (email[i] == "@"){
                flag = false;
            }
        }
        if(flag == true){
            alert("You have entered an invalid email address");
        }
   }
    else if(mobile.length == 0 ){
        alert("Required 10 digits mobile number");
    }
    else if(mobile.length != 10){
        alert("You have entered an invalid Mobile number");
    }
   
    
}
function check1(){

    var mobile = document.getElementById('mobile').value;

    if(mobile.length == 0 ){
        alert("Required 10 digits mobile number");
    }
    else if(mobile.length != 10){
        alert("You have entered an invalid Mobile number");
    }
}