$(document).ready(function (){

    var getProfile = new XMLHttpRequest();
  
    getProfile.open("POST", "/getuser",true);
    getProfile.setRequestHeader("Content-Type","application/json");
    getProfile.onload=function (){
      var profile = JSON.parse(getProfile.responseText);
      console.log(getProfile.responseText);
      firstName = profile[0].firstName;
      lastName = profile[0].lastName;
      userEmail = profile[0].userEmail;
      userAddress = profile[0].userAddress;
      userPassword = profile[0].userPassword;
      userPhone = profile[0].userPhone;
      userGender = profile[0].userGender;
      userImage = profile[0].userImage;
      userName = profile[0].userName;
  
      var imagetable = document.getElementById("imagetable");
      
      document.getElementById('userName').value=userName;
      document.getElementById('firstName').value=firstName;
      document.getElementById('lastName').value=lastName;
      document.getElementById('userEmail').value=userEmail;
      document.getElementById('userAddress').value=userAddress;
      document.getElementById('userPhone').value=userPhone;
      
     

      imagetable.innerHTML = "";
      var cell = '<img src="/Image/'+ userImage +'" id="userImage" class=" border-0 img-fluid profile-image-pic img-thumbnail rounded-circle my-3 "\
      width="200px" alt="profile"">';
      imagetable.insertAdjacentHTML('beforeend', cell);
    }
  
    var payload = {token : token};
    getProfile.send(JSON.stringify(payload));
})

function update(){

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/updateuser",true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    updateUser.onload=function (){

        window. location. replace("http://ec2-44-208-133-128.compute-1.amazonaws.com:8080/userProfile.html");
       
    }
    
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    userEmail = document.getElementById('userEmail').value;
    userAddress = document.getElementById('userAddress').value;
    userPhone = document.getElementById('userPhone').value;
    userImage = document.getElementById("myinput").value.replace('C:\\fakepath\\','');


    var payload = {firstName:firstName, lastName:lastName, userEmail:userEmail, userAddress:userAddress, userPassword:userPassword, userPhone:userPhone, userGender:userGender, userImage:userImage, token:token};
    console.log(payload)
    updateUser.send(JSON.stringify(payload));

}

function updateUserpassword(){

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT", "/updateuserpassword",true);
    updateUser.setRequestHeader("Content-Type", "application/json");
    
    var newpassword = document.getElementById("oldpass").value;
    var currentpassword = sessionStorage.getItem("userPassword");
    var confimpassword = document.getElementById("confirmnewpassword").value;
    userPassword = document.getElementById('userPassword').value;

    if( (newpassword == currentpassword) && (userPassword == confimpassword)){
        updateUser.onload=function (){
            window. location. replace("http://ec2-44-208-133-128.compute-1.amazonaws.com:8080/userProfile.html");
            sessionStorage.setItem("userPassword", userPassword);
        }
        
    } else {
        alert("INCORRECT OLD PASSWORD OR CONFIRM PASSWORD IS NOT THE SAME")
    } 

    var payload = {userPassword:userPassword, token:token};
    console.log(payload)
    updateUser.send(JSON.stringify(payload));

}
