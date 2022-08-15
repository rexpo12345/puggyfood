
//restaurant 
var restaurant_url = "/restaurants";
var restaurantCount = 0;  // restaurant counter sets to 0
var restaurant_array = []; // this creates an empty restaurant array
// user login
var userLogin_url = "/loginuser/:_id"
//user Register
var userprofile_url = "/userprofile"
var userprofileCount = 0;
var userprofile_array = [];
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */

var currentIndex=0;
var comment_url = "/comments";
var comment_array = []; // This creates an empty comment array

var starBWImage = 'Image/star.png';
var starImage = 'Image/starrating.png' ;
var rating = 0

var priceBWImage = 'Image/coin.png';
var priceImage = 'Image/dollar.png' ;
var price = 0

var likes = 0