"use strict";
const RestaurantsDB = require('../models/restaurantsDB')
const Restaurants = require('../models/restaurants');


var restaurantsDB = new RestaurantsDB();


function getAllRestaurants(request, respond){

    restaurantsDB.getAllRestaurants(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });
}


function searchRestaurants(request, respond) {
    restaurantsDB.searchRestaurants(request.body.restaurantName, request.body.restaurantLocation, request.body.restaurantCategory ,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function addRestaurant(request, respond){
        var restaurant = new Restaurants (null,request.body.restaurantName, request.body.restaurantLocation, request.body.restaurantCategory, request.body.restaurantRating, request.body.restaurantPrices, request.body.restaurantNoreviews, request.body.restaurantImg, request.body._idcommentPage);
        restaurantsDB.addRestaurant(restaurant, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
    })
}

function updateRestaurant(request, respond){

        var restaurant = new Restaurants(parseInt(request.params._id), request.body.restaurantName, request.body.restaurantLocation, request.body.restaurantCategory, request.body.restaurantRating, request.body.restaurantPrices, request.body.restaurantNoreviews, request.body.restaurantImg);
        restaurantsDB.updateRestaurant(restaurant, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
}
    
function deleteRestaurant(request, respond){
        var restaurant = request.params._id;
        restaurantsDB.deleteRestaurant(restaurant, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
}

function getrestaurantRating(request, respond){
    restaurantsDB.getrestaurantRating(parseInt(request.params.restaurantRating), function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantLocation(request, respond){
    var getloca = request.params.restaurantLocation
    restaurantsDB.getrestaurantLocation(getloca, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}



function getrestaurantCategories(request, respond){
    var getCate = request.params.restaurantCategory;
    restaurantsDB.getrestaurantCategories(getCate, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantPrices(request, respond){
    restaurantsDB.getrestaurantPrices(parseInt(request.params.restaurantPrices), function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function getrestaurantCategoriesRating(request, respond){
    restaurantsDB.getrestaurantCategoriesRating(request.body.restaurantRating,request.body.restaurantCategory, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantPricesRating(request, respond){
    restaurantsDB.getrestaurantPricesRating(request.body.restaurantPrices,request.body.restaurantRating, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantCategoriesPrices(request, respond){
    restaurantsDB.getrestaurantCategoriesPrices(request.body.restaurantCategory,request.body.restaurantPrices, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantLocationCategories(request, respond){
    restaurantsDB.getrestaurantLocationCategories(request.body.restaurantLocation,request.body.restaurantCategory, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantLocationCategoryPrice(request, respond){
    restaurantsDB.getrestaurantLocationCategoryPrice(request.body.restaurantLocation,request.body.restaurantCategory,request.body.restaurantPrices, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantLocationCategoryRating(request, respond){
    restaurantsDB.getrestaurantLocationCategoryRating(request.body.restaurantLocation,request.body.restaurantCategory,request.body.restaurantRating, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getrestaurantLocationCategoryRatingPrices(request, respond){
    restaurantsDB.getrestaurantLocationCategoryRatingPrices(request.body.restaurantLocation,request.body.restaurantCategory,request.body.restaurantRating,request.body.restaurantPrices, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantDetailsandInfo(request, respond) {
    var restaurant = new Restaurants(parseInt(request.params._id));
    restaurantsDB.getRestaurantDetailsandInfo(restaurant,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}



function searchRest(request, respond) {
    var searchTerm = request.params.restaurantName;
    restaurantsDB.searchRest(searchTerm, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}

module.exports = {searchRest,getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant, searchRestaurants, getrestaurantRating, getrestaurantCategories, getrestaurantCategoriesRating, getrestaurantLocation, getrestaurantPrices, getrestaurantPricesRating, getrestaurantCategoriesPrices, getrestaurantLocationCategories,getrestaurantLocationCategoryPrice ,getrestaurantLocationCategoryRating ,getrestaurantLocationCategoryRatingPrices, getRestaurantDetailsandInfo, getRestaurantDetailsandInfo};