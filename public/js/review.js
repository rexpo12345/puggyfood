
function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    price = 0;
    document.getElementById("userReview").value = "";
    //document.getElementById("tokenusername").value = "tokenusername";
}


function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // star images to use black and white.
    for (let s of stars) {
        s.setAttribute("src", starBWImage );
    }
    changeStarsImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the star image.
function changeStarsImage(num, classTarget) {
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


function priceIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // star images to use black and white.
    for (let s of stars) {
        s.setAttribute("src", priceBWImage );
    }
    changePricesImage(num, classTarget);
}
// prices change 
function changePricesImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", priceImage);
            price = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", priceImage);
            price = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", priceImage);
            price = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", priceImage);
            price = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", priceImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", priceImage);
            price = 5;
            break;
    }
}
//This function will hide the existing modal and present a modal with the selected review
//so that the user can attempt to change the username, rating or restaurant review
function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;
    // review._accountId = sessionStorage.getItem("token");

    // document.getElementById("editusername").value = review_array[item]._accountId;
    document.getElementById("edituserReview").value = review_array[item].comment;
    console.log(review_array[item].rating);
    displayColorStar('editpop', review_array[item].rating);
}

function editReviewprice(element) {
    var item = element.getAttribute("item");

    currentIndex = item;
    // review._accountId = sessionStorage.getItem("token");

    // document.getElementById("editusername").value = review_array[item]._accountId;
    document.getElementById("edituserReview").value = review_array[item].comment;
    console.log(review_array[item].price);
    displayColorStar('editprice', review_array[item].price);
}

//This function displayS the correct number of colored star
//based on the restaurant rating that is given in the user review
function displayColorStar(classname, num) {
    var star = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let s of star) {
        s.setAttribute("src", starBWImage);
      
    }
    changeStarsImage(num, classTarget);
}


function displayColorPrice(classname, num) {
    var star = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let s of star) {
        s.setAttribute("src", priceBWImage);
      
    }
    changePricesImage(num, classTarget);
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


