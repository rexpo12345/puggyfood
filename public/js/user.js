$(document).ready(function (){

  var getProfile = new XMLHttpRequest();

  getProfile.open("POST", "/getuser",true);
  getProfile.setRequestHeader("Content-Type","application/json");
  getProfile.onload=function (){
    var profile = JSON.parse(getProfile.responseText);
    console.log(getProfile.responseText);
    _id = profile[0]._id;
    firstName = profile[0].firstName;
    userEmail = profile[0].userEmail;
    userAddress = profile[0].userAddress;
    userPassword = profile[0].userPassword;
    userPhone = profile[0].userPhone;
    userGender = profile[0].userGender;
    userImage = profile[0].userImage.replace('C:\\fakepath\\','');
    userName = profile[0].userName;
    
    sessionStorage.setItem("_id", _id);

    var imagetable = document.getElementById("imagtable01");

    document.getElementById('userName').value=userName;
    document.getElementById('firstName').value=firstName;
  
    document.getElementById('userEmail').value=userEmail;
    document.getElementById('userAddress').value=userAddress;
    document.getElementById('userPassword').value=userPassword;
    document.getElementById('userPhone').value=userPhone;
    document.getElementById('userGender').value=userGender;
    

    imagetable.innerHTML = "";
    var cell = '<img src="Image/'+ userImage +'" id="userImage" class=" border-0 img-fluid profile-image-pic img-thumbnail rounded-circle my-3 "\
    width="200px" alt="profile"">';
    imagetable.insertAdjacentHTML('beforeend', cell);
  }

  var payload = {token : token};
  getProfile.send(JSON.stringify(payload));
})

function deleteUser(){
  var deleteUser = new XMLHttpRequest();
  var id = sessionStorage.getItem("_id");

  deleteUser.open("DELETE", "/userprofile/" + id, true);
  deleteUser.setRequestHeader("Content-Type", "application/json");
  
  deleteUser.onload = function() {
     
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("userPassword");
      sessionStorage.removeItem("_id");
      window. location. replace("http://ec2-34-227-58-112.compute-1.amazonaws.com:8080");
  
  }
  console.log(id);
  deleteUser.send();
}
