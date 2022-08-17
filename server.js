var express = require("express"); //using the express web framework

var commentController = require('./controllers/commentControllers'); // set commentController to the commentController class
var restaurantsController = require('./controllers/restaurantsControllers'); // set restaurantsController to the restaurantsController class
var restaurantsinfoController = require('./controllers/restaurantsinfoControllers'); // set restaurantsController to the restaurantsController class
var userprofileControllers = require('./controllers/userprofileControllers'); // set restaurantsController to the restaurantsController class
var contactformControllers = require('./controllers/contactformControllers'); // set restaurantsController to the restaurantsController class
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express
var cors = require('cors');



app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user
//restaurantdetail
app.route('/restaurants').get(restaurantsController.getAllRestaurants); // GET ALL RESTAURANTS
app.route('/restaurants').post(restaurantsController.addRestaurant); // ADD RESTAURANTS
app.route('/restaurants/:_id').put(restaurantsController.updateRestaurant) // UPDATE RESTAURANTS WITH RESTAURANT ID 
//filter for restaurant
app.route('/restaurants/:_id').delete(restaurantsController.deleteRestaurant); // DELETE RESTAURANTS WITH RESTAURANT ID
app.route('/restaurantsCategories/:restaurantCategory').get(restaurantsController.getrestaurantCategories); // GET RESTAURANTS CATEGORIES
app.route('/restaurantsLocation/:restaurantLocation').get(restaurantsController.getrestaurantLocation); // GET RESTAURANTS LOCATION
app.route('/restaurantsPrices/:restaurantPrices').get(restaurantsController.getrestaurantPrices); // GET RESTAURANTSPRICES BY INPUTING RESTAURANT PRICES VALUE
app.route('/restaurantsCategoriesRating').get(restaurantsController.getrestaurantCategoriesRating); // GET RESTAURANTS CATEGORY AND RATING BY INPUTING RESTAURANT CATEGORY AND RATING VALUE
app.route('/restaurantsRating/:restaurantRating').get(restaurantsController.getrestaurantRating); // GET RESTAURANTS RATING BY INPUTING RATING VALUE
app.route('/restaurantsPricesRating').get(restaurantsController.getrestaurantPricesRating); // GET RESTAURANTS PRICES AND RATING BY INPUTING PRICES AND RATING VALUE
app.route('/restaurantCategoriesPrices').get(restaurantsController.getrestaurantCategoriesPrices); // GET RESTAURANTS CATEGORY AND PRICES BY INPUTING RESTAURANT CATEGORY AND PRICES VALUE
app.route('/restaurantLocationCategories').get(restaurantsController.getrestaurantLocationCategories); // GET RESTAURANTS LOCATION AND CATEGORIES BY INPUTING RESTAURANT LOCATION AND CATEGORIES VALUE
app.route('/restaurantLocationCateRate').get(restaurantsController.getrestaurantLocationCategoryRating); // GET RESTAURANTS LOCATION AND CATEGORIES BY INPUTING RESTAURANT LOCATION AND CATEGORIES AND RATING VALUE
app.route('/restaurantLocationCatePrices').get(restaurantsController.getrestaurantLocationCategoryPrice); // GET RESTAURANTS LOCATION AND CATEGORIES BY INPUTING RESTAURANT LOCATION AND CATEGORIES AND RATING VALUE
app.route('/restaurantLocationCateRatePrice').get(restaurantsController.getrestaurantLocationCategoryRatingPrices); // GET RESTAURANTS LOCATION AND CATEGORIES BY INPUTING RESTAURANT LOCATION AND CATEGORIES VALUE
app.route('/restaurantdetailsandinfo/:_id').get(restaurantsController.getRestaurantDetailsandInfo); // INNER JOIN DETAILS AND INFO
// search function
app.route('/searchRestaurant').get(restaurantsController.searchRestaurants);
app.route('/searchRest/:restaurantName').get(restaurantsController.searchRest);
//restaurantsinfo
app.route('/restaurantsinfo').get(restaurantsinfoController.getAllRestaurantsinfo); // activate the getAllRestaurantsinfo method if the route is GET(method) /restaurantsinfo
app.route('/restaurantsinfo').post(restaurantsinfoController.addRestaurantinfo); // activate the addRestairantinfo method if the route is POST(method) /restaurantsinfo
app.route('/restaurantsinfo/:_id').put(restaurantsinfoController.updateRestaurantinfo) // activate the updateRestaurantinfo method if the route is PUT(method) /restaurantsinfo/:id
app.route('/restaurantsinfo/:_id').delete(restaurantsinfoController.deleteRestaurantinfo); // activate the deleteComment method if the route is DELETE(method) /restaurantsinfo/:id
app.route('/restaurantsinfoLoca/:_id').get(restaurantsinfoController.getRestaurantInfoandLoca); // Taking location from infoandLoca

//comments
app.route('/commentrest/:restaurantId').get(commentController.getCommentsforrestaurant)
app.route('/comments').get(commentController.getAllComments) // activate the getAllComments method if the route is GET(method) /comments
app.route('/usercommentrestaurant/:userProfileid').get(commentController.getUsernameRestaurantComment) // INNER JOIN USER NAME RESTAUARNT COMMENT WITH RESTAURANTINFORMATION
app.route('/comments').post(commentController.addComment); // activate the addComments method if the route is POST(method) /comments
app.route('/comments/:_id').put(commentController.updateComment) // activate the updateComments method if the route is PUT(method) /comments/:userprofileid
app.route('/comments/:_id').delete(commentController.deleteComment); // activate the deleteComment method if the route is DELETE(method) /comments/:id
//user profile account

app.route('/login').post(userprofileControllers.loginUser);
app.route('/getuser').post(userprofileControllers.getUser); // activate the getAllComments method if the route is GET(method) /comments
app.route('/userprofile').get(userprofileControllers.getAlluserprofiles); // activate the getAllComments method if the route is GET(method) /comments
app.route('/userprofile').post(userprofileControllers.createUser); // post user account into database is called the register
app.route('/userprofile/:_id').delete(userprofileControllers.deleteAccount); // activate the deleteComment method if the route is DELETE(method) /comments/:id
app.route('/updateuser').put(userprofileControllers.updateUser);
app.route('/updateuserpassword').put(userprofileControllers.updateUserpassword);
//contactform
app.route('/resetpass').put(userprofileControllers.resetUserpassword); // to update user the password to a default value 
app.route('/sendpassword').post(contactformControllers.sendForgottenpassword); // send an email telling client their new password
app.route('/sendemail').post(contactformControllers.sendEmail); // activate the addComments method if the route is POST(method) /comments
app.route('/contactform').get(contactformControllers.getContactform) // activate the getAllComments method if the route is GET(method) /comments
app.route('/contactform').post(contactformControllers.addContactform); // activate the addComments method if the route is POST(method) /comments
app.route('/contactform/:_id').put(contactformControllers.updateContactform) // activate the updateComments method if the route is PUT(method) /comments/:id
app.route('/contactform/:_id').delete(contactformControllers.deleteContactform); // activate the deleteComment method if the route is DELETE(method) /comments/:id
app.route('/usernameemailcontactform/:_userProfileid').get(contactformControllers.getUsernameEmailContactform); // activate the deleteComment method if the route is DELETE(method) /comments/:id

app.listen(8080,"ec2-18-207-43-190.compute-1.amazonaws.com"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ec2-18-207-43-190.compute-1.amazonaws.com:8080"); // output to console
