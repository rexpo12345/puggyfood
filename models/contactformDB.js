"use strict"

var db = require('../db-connection');

class ContactformsDB{

    getContactfrom(callback){
        var sql = "SELECT * from restaurant_review.contactform";
        db.query(sql, callback);
    }

    addContactform(contactform, callback){
        var sql = "INSERT INTO contactform ( messageText, subject, _userProfileid) VALUES (?, ?, ?)";
        db.query(sql, [contactform.getmessageText(), contactform.getsubject(), contactform.getuserProfileid()], callback);
    }
    
    updateContactform(contactform, callback){
        var sql = "UPDATE contactform SET messageText = ?, subject = ? WHERE _id = ?";
        return db.query(sql, [contactform.getmessageText(), contactform.getsubject(), contactform.getId()], callback);
    }
    deleteContactform(contactformID, callback){
        var sql = "DELETE from contactform WHERE _id = ?";
        return db.query(sql, [contactformID], callback);
    }

    getUsernameEmailContactform(contactform, callback){
        var sql = "SELECT restaurant_review.userprofile._id , restaurant_review.userprofile.userName, restaurant_review.userprofile.userEmail, restaurant_review.contactform.messageText , restaurant_review.contactform.subject FROM restaurant_review.userprofile INNER JOIN restaurant_review.contactform ON restaurant_review.userprofile._id = restaurant_review.contactform._userProfileid WHERE restaurant_review.userprofile._id = ? ";
        db.query(sql,[contactform.getuserProfileid()], callback);
    }
}

module.exports = ContactformsDB;