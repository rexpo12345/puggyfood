"use strict";
const CommentsDB = require('../models/commentsDB');
const Comment = require('../models/comments');

var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    commentsDB.getAllComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addComment(request, respond){
    var now = new Date();
    var comment = new Comment(null,request.body.userLikes, request.body.userRatings, request.body.userPrices, request.body.commentDescription, now.toString(), request.body.userProfileid, request.body.restaurantId);
    commentsDB.addComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
// function updateComment(request, respond){
//     // var now = new Date();
//     var comment = new Comment(parseInt(request.params._id),request.body.userLikes, request.body.userRatings, request.body.userPrices, request.body.commentDescription, request.body.timePosted,null);
//     commentsDB.updateComment(comment, function(error, result){
//         if(error){
//             respond.json(error);
//         }
//         else{
//             respond.json(result);
//         }
//     });
// }


function updateComment(request, respond) {

    var id = request.params._id;
    var userLikes = request.body.userLikes;
    var userRatings = request.body.userRatings;
    var userPrices = request.body.userPrices;
    var commentDescription = request.body.commentDescription;
    var timePosted = new Date();

   
     commentsDB.updateComment( userLikes, userRatings, userPrices, commentDescription, timePosted.toString(),id, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
} 


function deleteComment(request, respond){
    var commentID = request.params._id;
    commentsDB.deleteComment(commentID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getUsernameRestaurantComment(request, respond) {
    var comment = new Comment(null,null,null,null,null,null, parseInt(request.params.userProfileid));
    commentsDB.getUsernameRestaurantComment(comment,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getCommentsforrestaurant(request, respond) {
    var comment = request.params.restaurantId
    commentsDB.getCommentsforrestaurant(comment,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllComments, addComment, updateComment, deleteComment, getUsernameRestaurantComment, getCommentsforrestaurant};