$(document).ready(function (){

    var getProfile = new XMLHttpRequest();
  
    getProfile.open("POST", "/getuser",true);
    getProfile.setRequestHeader("Content-Type","application/json");
    getProfile.onload=function (){
      var profile = JSON.parse(getProfile.responseText);
      console.log(getProfile.responseText);
      firstName = profile[0].firstName;
      userEmail = profile[0].userEmail;
      userAddress = profile[0].userAddress;
      userPassword = profile[0].userPassword;
      userPhone = profile[0].userPhone;
      userGender = profile[0].userGender;
      userImage = profile[0].userImage.replace('C:\\fakepath\\','');
      userName = profile[0].userName;
  
      var navuser = document.getElementById("navUser");
      document.getElementById("userName").value = userName;
      document.getElementById("userEmail").value = userEmail;


      navuser.innerHTML = "";
      var cell = '<p><img src="Image/'+ userImage +'" alt="" class="border-0 profileimage img-thumbnail rounded-circle my-3 "> Welcome: '+ userName +'</p>';
      navuser.insertAdjacentHTML('beforeend', cell);
    }
  
    var payload = {token : token};
    getProfile.send(JSON.stringify(payload));
  })

function sendEmail(){

    var emailUser = new XMLHttpRequest();

    emailUser.open("POST", "/sendemail",true);
    emailUser.setRequestHeader("Content-Type", "application/json");
    emailUser.onload=function (){

        var token = JSON.parse(emailUser.responseText);
        console.log(token.result);
        if (token.result == "success") {
            
            $('#contactusmodal').modal('show');
        
        } else {
            $('#incorrect').modal('show');
           
        }
    }

    var userEmail = document.getElementById("userEmail").value;
    var subject = document.getElementById("subject").value;
    var messageText = document.getElementById("messageText").value;
    var payload = {userEmail:userEmail,subject:subject, messageText:messageText};
    console.log(payload);
    emailUser.send(JSON.stringify(payload));

}


