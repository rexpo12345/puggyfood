"use strict";

var db = require('../db-connection');

class RestaurantsinfoDB{

    getAllRestaurantsinfo(callback){

        var sql = "SELECT * FROM restaurant_review.restaurantinformation;"

        db.query(sql, callback);

    }

    addRestaurantinfo(restaurantinfo, callback){
        var sql = "INSERT INTO restaurantinformation ( restaurantMap, restaurantAddress, restaurantPhone, restaurantWebsite, restaurantEmail, restaurantHours, restaurantDescription) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [restaurantinfo.getrestaurantMap(), restaurantinfo.getrestaurantAddress(), restaurantinfo.getrestaurantPhone(), restaurantinfo.getrestaurantWebsite(), restaurantinfo.getrestaurantEmail(), restaurantinfo.getrestaurantHours(), restaurantinfo.getrestaurantDescription()], callback);
    }

    updateRestaurantinfo(restaurantinfo, callback){
        var sql = "UPDATE restaurantinformation SET restaurantMap = ?, restaurantAddress = ?, restaurantPhone = ?, restaurantWebsite = ?, restaurantEmail = ?, restaurantHours = ?, restaurantDescription = ? WHERE _id = ?";
        return db.query(sql, [restaurantinfo.getrestaurantMap(), restaurantinfo.getrestaurantAddress(), restaurantinfo.getrestaurantPhone(), restaurantinfo.getrestaurantWebsite(), restaurantinfo.getrestaurantEmail(), restaurantinfo.getrestaurantHours(),restaurantinfo.getrestaurantDescription() ,restaurantinfo.getId()], callback);
    }
    deleteRestaurantinfo(restaurantID, callback){
        var sql = "DELETE from restaurantinformation WHERE _id = ?";
        return db.query(sql, [restaurantID], callback);
    }

     // RIGHT JOIN RESTAURANT INFO AND LOCATION FROM RESTAURANTDETAIL TABLE
    
     getRestaurantInfoandLoca(restaurantinfo, callback){
        var sql = "SELECT restaurant_review.restaurantinformation._id, restaurant_review.restaurantinformation.restaurantMap, restaurant_review.restaurantinformation.restaurantAddress , restaurant_review.restaurantdetail.restaurantLocation, restaurant_review.restaurantinformation.restaurantWebsite, restaurant_review.restaurantinformation.restaurantPhone ,restaurant_review.restaurantinformation.restaurantEmail , restaurant_review.restaurantinformation.restaurantHours FROM restaurant_review.restaurantdetail RIGHT JOIN restaurant_review.restaurantinformation ON restaurantdetail._id = restaurantinformation._idrestaurantDetail WHERE restaurant_review.restaurantinformation._idrestaurantDetail = ? ";
        db.query(sql, [restaurantinfo.getId()], callback);
    }

    

}



module.exports = RestaurantsinfoDB;