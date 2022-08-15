$(document).ready(function (){
 
    var token = sessionStorage.getItem("token");
    if (token != null) {
        $('#loginmenu').hide();
        $('#logoutMenu').show();
        $('#contactus').show();
        $('#allowreview').show();
        $('#dontallow').hide();
     
        
        
    } else {
        $('#loginmenu').show();
        $('#logoutMenu').hide();
        $('#contactus').hide();
        $('#allowreview').hide();
        $('#dontallow').show();
      

    }
    
})


//load user data to fetch to front end
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

      navuser.innerHTML = "";
      var cell = '<p><img src="Image/'+ userImage +'" alt="" class="border-0 profileimage img-thumbnail rounded-circle my-3 "> Welcome: '+ userName +'</p>';
      navuser.insertAdjacentHTML('beforeend', cell);
    }
  
    var payload = {token : token};
    getProfile.send(JSON.stringify(payload));
  })