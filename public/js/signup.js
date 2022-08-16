const match = require("nodemon/lib/monitor/match");

function newUser() {
    //Initialise each HTML input elements in the modal window with default value.
    document.getElementById("userName").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userAddress").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("userPhone").value = "";
    

}

function createUser() {
    var useraccount = new Object();
    useraccount.userName = document.getElementById("userName").value; // Value from HTML input text
    useraccount.firstName = document.getElementById("firstName").value; // Value from HTML input text
    useraccount.lastName = document.getElementById("lastName").value;  // Change the datePosted to null instead of taking the timestamp on the client side;
    useraccount.userEmail = document.getElementById("userEmail").value;
    useraccount.userAddress = document.getElementById("userAddress").value;
    useraccount.userPassword = document.getElementById("userPassword").value;
    var confirmpass = document.getElementById("confirmpassword").value;
    useraccount.userPhone = document.getElementById("userPhone").value;
    if (document.getElementById('userGender1').checked) {
        useraccount.userGender = document.getElementById('userGender1').value;
      } else {
        useraccount.userGender = document.getElementById("userGender").value;
      }

      if(useraccount.userName == '') {

        alert("Please fill in your username is empty")
  
      }  else if (useraccount.userAddress == '') {
  
      alert("Please fill in your user useraddress is empty")
  
    } else if (useraccount.userPassword == '') {
  
      alert("Please fill in your user userpassword is empty")
  
    } else if (useraccount.userPhone == '' ) {
  
      alert("Please fill in your user userphone is empty")
  
  } else if (confirmpass == '' ) {
  
    alert("Please fill in confirm password is empty")
  
  } 
  
      else if (useraccount.userEmail == '') {
      alert("Please fill in your useremail is empty")
  
    } 
      else if (useraccount.firstName == '') {
  
        alert("Please fill in your firstname is empty")
  
    } else if (useraccount.lastName == '') {
  
        alert("Please fill in your lastname is empty")
  
    }   else if (useraccount.userGender == '' ) {
  
      alert("Please Select a Gender")
    
    } else if (useraccount.userPassword != confirmpass ) {
  
      alert("user password does not match confirm password")
  
    }   else if (useraccount.userName.length < 8) {
  
      alert("Please fill in username more than 8 words")
  
    } else if (useraccount.userPassword.length < 8) {
  
      alert("Please fill in your password more than 8 words")
  
    }  else  if(useraccount.userPhone.length != 8) {
       
      alert("Please Enter a valid 8-digits phone number")
  
    } else  {
    var response = "";
    var request = new XMLHttpRequest(); // new HttpRequest instance to send comment
    
    request.open("POST", userprofile_url , true); //Use the HTTP POST method to send data to server
    
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
    response = JSON.parse(request.responseText);
    //input validation 
  

			alert("User registered!")
      window. location. replace("ec2-34-227-58-112.compute-1.amazonaws.com:8080/Login.html"); 
        // fetch all comments again so that the web page can have updated comments.   
      
    };
   
    // Convert the data in Comment object to JSON format before sending to the server.
    request.send(JSON.stringify(useraccount));
}
}

