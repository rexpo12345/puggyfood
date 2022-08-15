"use strict";

const RestaurantsinfoDB = require('../models/restaurantsinfoDB')
const Restaurantsinfo = require('../models/restaurantsinfo');
const Restaurant = require('../models/restaurants');

var restaurantsinfoDB = new RestaurantsinfoDB();


function getAllRestaurantsinfo(request, respond){

    restaurantsinfoDB.getAllRestaurantsinfo(function(error, result){

        if(error){

            respond.json(error);

        }

        else{

            respond.json(result);

        }

    });


    
}
function addRestaurantinfo(request, respond){
    
    var restaurantinfo = new Restaurantsinfo (null,request.body.restaurantMap, request.body.restaurantAddress, request.body.restaurantPhone, request.body.restaurantWebsite, request.body.restaurantEmail, request.body.restaurantHours, request.body.restaurantDescription, null);
    restaurantsinfoDB.addRestaurantinfo(restaurantinfo, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function updateRestaurantinfo(request, respond){

    var restaurantinfo = new Restaurantsinfo(parseInt(request.params._id), request.body.restaurantMap, request.body.restaurantAddress, request.body.restaurantPhone, request.body.restaurantWebsite, request.body.restaurantEmail, request.body.restaurantHours, request.body.restaurantDescription);
    restaurantsinfoDB.updateRestaurantinfo(restaurantinfo, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteRestaurantinfo(request, respond){
    var restaurantinfo = request.params._id;
    restaurantsinfoDB.deleteRestaurantinfo(restaurantinfo, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantInfoandLoca(request, respond) {
    var restaurantinfo = new Restaurantsinfo(parseInt(request.params._id));
    restaurantsinfoDB.getRestaurantInfoandLoca(restaurantinfo,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}




module.exports = {getAllRestaurantsinfo , addRestaurantinfo, updateRestaurantinfo, deleteRestaurantinfo, getRestaurantInfoandLoca };