

function showRestaurantDetails() {
    var item = sessionStorage.getItem("restaurantid")
    
    currentIndex = item;
    
    restaurant_url = "/restaurantdetailsandinfo/"+ item;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText);
       var test = restaurant_array[0]._id 
        console.log(test);
        restaurantImg = document.getElementById("restaurantImg").src = restaurant_array[0].restaurantImg;
        restName = document.getElementById("restname").textContent = "Follow them @" + restaurant_array[0].restaurantName;
        restaurantName = document.getElementById("restaurantName").textContent = restaurant_array[0].restaurantName;
        restaurantDescription = document.getElementById("testDesc").textContent = restaurant_array[0].restaurantDescription;
        restaurantRating = document.getElementById("rating").textContent = "Ratings: " + restaurant_array[0].restaurantRating;
        restaurantPrices = document.getElementById("price").textContent = "Prices: " + restaurant_array[0].restaurantPrices;
        restaurantNoreviews = document.getElementById("noreview").textContent = "Reviews: " + restaurant_array[0].restaurantNoreviews;    
        console.log(restaurant_array);
         

        };
    request.send();

}
$(document).ready(function (){
    var item = sessionStorage.getItem("restaurantid")
 
    restaurant_url = "/restaurantsinfoLoca/"+ item;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText);
        var comment_id = restaurant_array[0]._id
        
        sessionStorage.setItem("fetchcommentid",comment_id)
        restaurantMap = document.getElementById("map").src = restaurant_array[0].restaurantMap;
        restaurantAddress = document.getElementById("address").textContent = " Address: " + restaurant_array[0].restaurantAddress;
        restaurantLocation = document.getElementById("location").textContent = " Location: " + restaurant_array[0].restaurantLocation;
        restaurantWebsite = document.getElementById("website").textContent = " Website: " + restaurant_array[0].restaurantWebsite;
        restaurantPhone = document.getElementById("phone").textContent = restaurant_array[0].restaurantPhone;
        restaurantEmail = document.getElementById("email").textContent =  restaurant_array[0].restaurantEmail;
        restaurantHours = document.getElementById("restauranthours").textContent = " Monday to Saturday: " + restaurant_array[0].restaurantHours;
        console.log(restaurant_array);
         
        
        };
    request.send();
});

// function showRestaurantinnerjoin() {
//     var item = sessionStorage.getItem("restaurantid")
 
//     restaurant_url = "/restaurantsinfoLoca/"+ item;
//     var request = new XMLHttpRequest();
//     request.open('GET', restaurant_url, true);
//     request.onload = function (){
//         restaurant_array = JSON.parse(request.responseText);
//         var comment_id = restaurant_array[0]._id
        
//         sessionStorage.setItem("fetchcommentid",comment_id)
//         restaurantMap = document.getElementById("map").src = restaurant_array[0].restaurantMap;
//         restaurantAddress = document.getElementById("address").textContent = " Address: " + restaurant_array[0].restaurantAddress;
//         restaurantLocation = document.getElementById("location").textContent = " Location: " + restaurant_array[0].restaurantLocation;
//         restaurantWebsite = document.getElementById("website").textContent = " Website: " + restaurant_array[0].restaurantWebsite;
//         restaurantPhone = document.getElementById("phone").textContent = restaurant_array[0].restaurantPhone;
//         restaurantEmail = document.getElementById("email").textContent =  restaurant_array[0].restaurantEmail;
//         restaurantHours = document.getElementById("restauranthours").textContent = " Monday to Saturday: " + restaurant_array[0].restaurantHours;
//         console.log(restaurant_array);
         
        
//         };
//     request.send();
    
// }

// function addComment() {
//     var comment = new Object();
//     comment.commentDescription = document.getElementById("commentdesc").value;// Movie ID is required by server to create new comment  // Movie title is required by server to create new comment
//     comment.timePosted = null // Value from HTML input text
//     comment.userProfileid = sessionStorage.getItem("_id");
//     comment.restaurantId = sessionStorage.getItem("restaurantid");
    
//     var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

//     postComment.open("POST", "/comments", true); //Use the HTTP POST method to send data to server

//     postComment.setRequestHeader("Content-Type", "application/json");
//     postComment.onload = function () {
//         console.log("new comment sent");
   
//         commentRestaurant(); // fetch all comments again so that the web page can have updated comments.     
//     };
//     // Convert the data in Comment object to JSON format before sending to the server.
//     postComment.send(JSON.stringify(comment));
// }



function commentRestaurant() {
    var restaurantId = sessionStorage.getItem("fetchcommentid")
    
    restaurant_url = '/commentrest/' + restaurantId;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    request.onload = function (){
        
        restaurant_array = JSON.parse(request.responseText);
        var table = document.getElementById("commentstable");
        var userid = sessionStorage.getItem("_id");
        var restaurantCount = 0;      
        table.innerHTML = "";
        totalRestaurants = restaurant_array.length;
        for (var count = 0; count < totalRestaurants; count++) {
            if (restaurant_array[count]._id > 0) {   
               
                var commentid = restaurant_array[count]._id
                var userImage = restaurant_array[count].userImage;
                var userName = restaurant_array[count].userName;
                var timePosted = restaurant_array[count].timePosted;
                var userLikes = restaurant_array[count].userLikes;
                var userRatings = restaurant_array[count].userRatings;
                var userprofie_id = restaurant_array[count].userProfileid;
               
                
                console.log(restaurant_array)
           
            //     if(userRatings > 0 ){
            //     document.getElementById("userheart").src = "Image/heartfilledwithlove.png";
            //     } else {
            //    document.getElementById("userheart").src = "Image/heart.png";
            //     }
                var userPrices = restaurant_array[count].userPrices;
                var commentDescription = restaurant_array[count].commentDescription;
                console.log(commentid)
       
                var cell = '<div class="card mb-3 w-60 ml-5 border border-dark boxshadow">\
                <div class="card-body" ">\
                  <div class="card-text">\
                  <div class="container">\
                      <div class="row">\
                      <div class="col-2">\
                  <img src="Image/'+ userImage +'" class=" border-0 rounded-circle " width="150px" height ="150px;" alt="profile">\
                          </div>\
                      <div class="col-6 align-middle mt-4 ">\
                      <p class="mb-0 textdesc comment" id="userName">'+ userName +'</p>\
                      <p class="mt-0 comment">'+ userLikes +' likes on the Review</p>\
                      </div>\
                      <div class="col-4 text-right comment">\
                          <p>Published on:'+ timePosted +' <img src="Image/heartfilledwithlove.png" id="userheart" alt="" width="30px" class="align-top"></p>\
                          <p>Rating: '+ userRatings +'\
                          </p>\
                          <p>Price: '+ userPrices +'\
                          </p>\
                      </div>\
                  </div>\
                  <div id=' + userprofie_id +' class="hidden">\
				<button type="button" id='+ commentid +' class="btn btn-color px-5 mb-2 w-40 pr-3 btnEdit border border-dark" data-toggle="modal" onClick="getCommentid(this.id)" data-target="#editCommentModal">EDIT</button>\
			 	 <button type="button" id='+ commentid +' class="btn btn-color px-5 mb-2 w-40 btnDel border border-dark" data-toggle="modal " onClick="deleteComment(this.id)"  >DELETE</button>\
				</div>\
                  <div class="row">\
                      <textarea class="form-control inputboxshadow border border-dark card-text mt-3" id="exampleFormControlTextarea1" rows="3" disabled> '+ commentDescription +'</textarea>\
                  </div>\
                  </div>\
                   </div>\
                </div>\
              </div>'
             
            }
            
        table.insertAdjacentHTML('beforeend', cell);
        
        restaurantCount++;
        console.log(restaurant_array);
        //hide button only users can see their own edit and delete buttons
        if(userid == userprofie_id){
            $("#" + userid).show();
            
        } else {
           
            $(".hidden").hide();
            }
        
     } 
    
    };
    request.send();
   
}



//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", starBWImage);
    }
    changePopcornImage(num, classTarget);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", starBWImage);
    }
    changePopcornImage(num, classTarget);
}

function getCommentid(click_id){
   sessionStorage.setItem("commentid", click_id);

}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}



function showRestaurantDetails() {
    var item = sessionStorage.getItem("restaurantid")
    currentIndex = item;
    
    restaurant_url = "/restaurantdetailsandinfo/"+ item;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText);
        restaurantImg = document.getElementById("restaurantImg").src = restaurant_array[0].restaurantImg;
        restName = document.getElementById("restname").textContent = "Follow them @" + restaurant_array[0].restaurantName;
        restaurantName = document.getElementById("restaurantName").textContent = restaurant_array[0].restaurantName;
        restaurantDescription = document.getElementById("testDesc").textContent = restaurant_array[0].restaurantDescription;
        restaurantRating = document.getElementById("rating").textContent = "Ratings: " + restaurant_array[0].restaurantRating;
        restaurantPrices = document.getElementById("price").textContent = "Prices: " + restaurant_array[0].restaurantPrices;
        restaurantNoreviews = document.getElementById("noreview").textContent = "Reviews: " + restaurant_array[0].restaurantNoreviews;    
        console.log(restaurant_array);
         

        };
    request.send();

}

// function testMe() {
//     var restaurantCount = 0;
//     totalRestaurants = restaurant_array.length;
//     var testingid = restaurant_array[restaurantCount]._id;
//     console.log(testingid)
//     restaurant_url = "/restaurantdetailsandinfo/"+ testingid;
//     var request = new XMLHttpRequest();
//     request.open('GET', restaurant_url, true);
//     request.onload = function (){
//         restaurant_array = JSON.parse(request.responseText);
//         sessionStorage.setItem("restaurantid",testingid);    
//         console.log(restaurant_array);
//         // window. location. replace("http://127.0.0.1:8080/restaurant.html");    

//         };
//     request.send();
//     }

function deleteComment(click_id){

    var response = confirm("Are you sure you want to delete this comment?");
    
    if (response == true) {
       //get the current item
        var delete_comment_url = "comments/" + click_id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            commentRestaurant()
        };
        eraseComment.send();
    }

}

function resetvalue() {
    rating = 0;
    price = 0;
    document.getElementById("userReview").value = "";

}

function addReview() {
   
    var review = new Object();
    var userprofileId = sessionStorage.getItem("_id");
    var restaurantId = sessionStorage.getItem("fetchcommentid")
    
   
    review.userLikes = 0;
    review.commentDescription = document.getElementById("userReview").value; // Value from HTML input text
    review.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;    
    review.userRatings = rating;
    review.userPrices = price;
    review.userProfileid = userprofileId;
    review.restaurantId = restaurantId;

    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send review

    postReview.open("POST", "/comments", true); //Use the HTTP POST method to send data to server

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function () {
        console.log("new review sent");
        commentRestaurant() // fetch all review again so that the web page can have updated review.     
    };
    // Convert the data in review object to JSON format before sending to the server.
    postReview.send(JSON.stringify(review));
	
}

function notification(){
    var item = sessionStorage.getItem("restaurantid")
    currentIndex = item;
    restaurant_url = "/restaurantdetailsandinfo/"+ item;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText);
        restaurantName = document.getElementById("restaurantName").textContent = restaurant_array[0].restaurantName;
        console.log(restaurant_array);      

     };	
    var notification = new XMLHttpRequest();
    console.log("please work")
    notification .open("POST", "https://pxwtkpb0mh.execute-api.us-east-1.amazonaws.com/reviewnotification/user",true);
    notification .setRequestHeader("Content-Type", "application/json");
    
    restaurantname = restaurantName;
    username = profile[0].userName;
    reviewmessage = document.getElementById("userReview").value;

    var payload = {restaurantname:restaurantname,username:username,reviewmessage:reviewmessage};
    console.log(payload)
    updateUser.send(JSON.stringify(payload));

}

function updateComment(){
 
    var comment = new XMLHttpRequest();
    var commentId = sessionStorage.getItem("commentid");
    comment.open("PUT", "/comments/"+ commentId,true);
    comment.setRequestHeader("Content-Type", "application/json");
    comment.onload=function (){
        
        commentRestaurant()
       
    }
    
    userLikes = likes;
    userRatings = rating;
    userPrices = price;
    commentDescription = document.getElementById('commentdesc').value ;
    timeposted = null


    var payload = {userLikes:userLikes, userRatings:userRatings, userPrices:userPrices, commentDescription:commentDescription, timeposted:timeposted};
    console.log(payload)
    comment.send(JSON.stringify(payload));

}
