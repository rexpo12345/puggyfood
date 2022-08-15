"use strict";

var db = require('../db-connection');

class RestaurantsDB{

    getAllRestaurants(callback){

        var sql = "SELECT * from restaurant_review.restaurantdetail ORDER BY restaurantName ASC;";

        db.query(sql, callback);

    }

    searchRestaurants(restaurantName,restaurantLocation,restaurantCategory,callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantName LIKE '" + restaurantName + "%'" + "OR restaurantLocation LIKE '" + restaurantLocation + "%'" + "OR restaurantCategory LIKE '" + restaurantCategory + "%'";
        db.query(sql,[restaurantName,restaurantLocation,restaurantCategory],callback);
    }

    addRestaurant(restaurant, callback){
        var sql = "INSERT INTO restaurantdetail ( restaurantName, restaurantLocation, restaurantCategory, restaurantRating, restaurantPrices, restaurantNoreviews, restaurantImg) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [restaurant.getrestaurantName(), restaurant.getrestaurantLocation(), restaurant.getrestaurantCategory(), restaurant.getrestaurantRating(), restaurant.getrestaurantPrices(), restaurant.getrestaurantNoreviews(), restaurant.getrestaurantImg()], callback);
    }

    updateRestaurant(restaurant, callback){
        var sql = "UPDATE restaurantdetail SET restaurantName = ?, restaurantLocation = ?, restaurantCategory = ?, restaurantRating = ?, restaurantPrices = ?, restaurantNoreviews = ?, restaurantImg = ? WHERE _id = ?";
        return db.query(sql, [restaurant.getrestaurantName(), restaurant.getrestaurantLocation(), restaurant.getrestaurantCategory() , restaurant.getrestaurantRating(), restaurant.getrestaurantPrices(), restaurant.getrestaurantNoreviews() ,restaurant.getrestaurantImg(), restaurant.getId()], callback);
    }
    deleteRestaurant(restaurant, callback){
        var sql = "DELETE from restaurantdetail WHERE _id = ?";
        return db.query(sql, [restaurant], callback);
    }
 
    getrestaurantRating(restaurantRating,callback) {
        var sql = " SELECT * FROM restaurant_review.restaurantdetail WHERE restaurantRating = " + restaurantRating;
        db.query(sql, callback);
    }

    getrestaurantLocation(restaurantLocation, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurantdetail WHERE restaurantLocation = '" + restaurantLocation + "'";
        db.query(sql, callback);
    }

    getrestaurantCategories(restaurantCategory, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurantdetail WHERE restaurantCategory = '" + restaurantCategory + "'";
        db.query(sql, callback);
    }

    getrestaurantPrices(restaurantPrices, callback) {
        var sql = " SELECT * FROM restaurant_review.restaurantdetail WHERE restaurantPrices = " + restaurantPrices;
        db.query(sql, callback);
    }

    //get both categories and ratings
    getrestaurantCategoriesRating(restaurantRating, restaurantCategory, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantCategory = '" + restaurantCategory + "'" + " AND restaurantRating = " + restaurantRating  ;
        db.query(sql, callback); 
    }

    //get both categories and prices
   

    //get both Prices and ratings
    getrestaurantPricesRating(restaurantPrices, restaurantRating, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantPrices = " + restaurantPrices + " AND restaurantRating = " + restaurantRating  ;
        db.query(sql, callback); 
    }
    // get both categories and prices
    getrestaurantCategoriesPrices(restaurantCategory, restaurantPrices, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantCategory = '" + restaurantCategory + "'" + "AND restaurantPrices = " + restaurantPrices  ;
        db.query(sql, callback); 
    }
    // get restaurant Location and categories
    getrestaurantLocationCategories(restaurantLocation, restaurantCategory, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantLocation = '" + restaurantLocation + "'" + " AND restaurantCategory = '" + restaurantCategory + "'";
        db.query(sql, callback); 
    }
    // get restaurant Location and Category and prices
    getrestaurantLocationCategoryPrice(restaurantLocation, restaurantCategory, restaurantPrices, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantLocation = '" + restaurantLocation + "'" + " AND restaurantCategory = '" + restaurantCategory + "'"  + " AND restaurantPrices = " + restaurantPrices  ;
        db.query(sql, callback); 
    }

    // get restaurant Location , category , rating
    getrestaurantLocationCategoryRating(restaurantLocation, restaurantCategory, restaurantRating, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantLocation = '" + restaurantLocation + "'" + " AND restaurantCategory = '" + restaurantCategory + "'" + " AND restaurantRating = " + restaurantRating ;
        db.query(sql, callback); 
    }

    // get restaurant Location , category , rating and prices
    getrestaurantLocationCategoryRatingPrices(restaurantLocation, restaurantCategory, restaurantRating, restaurantPrices, callback) {
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantLocation = '" + restaurantLocation + "'" + " AND restaurantCategory = '" + restaurantCategory + "'" + " AND restaurantRating = " + restaurantRating + " AND restaurantPrices = " + restaurantPrices  ;
        db.query(sql, callback); 
    }

    // getRestaurantDetailsandInfo
    getRestaurantDetailsandInfo(restaurant, callback){
        var sql = "SELECT restaurant_review.restaurantinformation._id, restaurant_review.restaurantdetail.restaurantImg, restaurant_review.restaurantdetail.restaurantName, restaurant_review.restaurantinformation.restaurantDescription, restaurant_review.restaurantdetail.restaurantRating,restaurant_review.restaurantdetail.restaurantNoreviews, restaurant_review.restaurantdetail.restaurantPrices FROM restaurant_review.restaurantdetail LEFT JOIN restaurant_review.restaurantinformation ON restaurantdetail._id = restaurantinformation._idrestaurantDetail WHERE restaurantdetail._id = ?";
        db.query(sql,[restaurant.getId()], callback);
    }

    searchRest(keyword, callback){
        var key =  "%"+keyword+"%";
        var sql = "SELECT * from restaurant_review.restaurantdetail WHERE restaurantName LIKE ? " ;
        db.query(sql, [key], callback);
    }

}



module.exports = RestaurantsDB;