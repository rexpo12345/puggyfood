"use strict"

var db = require('../db-connection');

class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from restaurant_review.commentpage";
        db.query(sql, callback);
    }

    addComment(comment, callback){
        var sql = "INSERT INTO commentpage ( userLikes, userRatings, userPrices, commentDescription, timePosted, userProfileid, restaurantId ) VALUES (?, ?, ?, ?, ?, ?,?)";
        db.query(sql, [comment.getuserLikes(), comment.getuserRatings(), comment.getuserPrices(), comment.getcommentDescription(), comment.gettimePosted(), comment.getuserProfileid(),comment.getrestaurantId()], callback);
    }
    // updateComment(comment, callback){
    //     var sql = "UPDATE commentpage SET userLikes = ?, userRatings = ?, userPrices = ?, commentDescription = ?, timePosted = ? WHERE _id = ?";
    //     return db.query(sql, [comment.getuserLikes(), comment.getuserRatings(),comment.getuserPrices(), comment.getcommentDescription(),comment.gettimePosted(), comment. getId()], callback);
    // }
    deleteComment(commentID, callback){
        var sql = "DELETE from commentpage WHERE _id = ?";
        return db.query(sql, [commentID], callback);
    }
    getUsernameRestaurantComment(comment,callback) {
        var sql = "SELECT restaurant_review.commentpage._id, restaurant_review.userprofile.userImage, restaurant_review.userprofile.userName,restaurant_review.commentpage.timePosted ,restaurant_review.commentpage.userLikes, restaurant_review.commentpage.userRatings, restaurant_review.commentpage.userPrices, restaurant_review.commentpage.commentDescription FROM restaurant_review.commentpage INNER JOIN restaurant_review.userprofile ON restaurant_review.userprofile._id = restaurant_review.commentpage.userProfileid INNER JOIN restaurant_review.restaurantdetail ON restaurant_review.restaurantdetail._idcommentpage = restaurant_review.commentpage._id WHERE commentpage._id = ? ";
        db.query(sql,[comment.getuserProfileid()],callback);
    }

    updateComment(id,userLikes,userRatings,userPrices,commentDescription,timePosted, callback){
        var sql = "UPDATE commentpage SET userLikes = ?, userRatings = ?, userPrices = ?, commentDescription = ?, timePosted = ? WHERE _id = ?";
        return db.query(sql, [id,userLikes,userRatings,userPrices,commentDescription,timePosted], callback);
    }


   getCommentsforrestaurant( restaurantId,callback) {
       var sql = "SELECT restaurant_review.commentpage._id, restaurant_review.userprofile.userImage, restaurant_review.userprofile.userName,restaurant_review.commentpage.timePosted ,restaurant_review.commentpage.userLikes, restaurant_review.commentpage.userRatings, restaurant_review.commentpage.userPrices, restaurant_review.commentpage.commentDescription, restaurant_review.commentpage.userProfileid FROM restaurant_review.commentpage INNER JOIN restaurant_review.userprofile ON restaurant_review.userprofile._id = restaurant_review.commentpage.userProfileid INNER JOIN restaurant_review.restaurantinformation ON restaurant_review.restaurantinformation._id = restaurant_review.commentpage.restaurantId WHERE restaurantId = ?"
       db.query(sql,[restaurantId],callback)
   }
}

module.exports = CommentsDB;