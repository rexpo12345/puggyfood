

function loginMe(){

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "/login",true);
    
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload=function (){
        
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        
            if (token.result != "invalid") {
                window. location. replace("http://127.0.0.1:8080/userProfile.html");
                sessionStorage.setItem("token", token.result);
                sessionStorage.setItem("userName", userName);
                sessionStorage.setItem("userPassword", userPassword);
                sessionStorage.setItem("_id", _id);
                
            } else {
                $('#incorrect').modal('show');
               
            }
        }
       

    var userName = document.getElementById("userNamelogin").value;
    var userPassword = document.getElementById("userPasswordlogin").value;
    var payload = {userName:userName, userPassword:userPassword};
    loginUser.send(JSON.stringify(payload));

}


function sendForgottenpassword(){

    var emailUser = new XMLHttpRequest();

    emailUser.open("POST", "/sendpassword",true);
    emailUser.setRequestHeader("Content-Type", "application/json");
    emailUser.onload=function (){

        var token = JSON.parse(emailUser.responseText);
        console.log(token.result);
        if (token.result == "success") {
            resetPassword();
            $('#successModal').modal('show');
        
        } else {
            $('#incorrect').modal('show');
           
        }
    }

    var userEmail = document.getElementById("userEmail").value;
    var payload = {userEmail:userEmail};
    console.log(payload);
    emailUser.send(JSON.stringify(payload));

}

function resetPassword(){

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/resetpass",true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    
    userEmail = document.getElementById('userEmail').value;
    userPassword = "newPass123";

    var payload = {userEmail:userEmail,userPassword:userPassword};
    console.log(payload)
    updateUser.send(JSON.stringify(payload));

}