"use strict"

var db = require('../db-connection');
class userprofileDB{
    getAlluserprofiles(callback){
        var sql = "SELECT * FROM restaurant_review.userprofile;";
        db.query(sql, callback);
    }

    getUser(userName, callback){
        var sql = "SELECT DISTINCT * FROM restaurant_review.userprofile WHERE userName = ?";
        db.query(sql,[userName] ,callback);
    }

    loginUser(userName ,callback){
        var sql = "SELECT userPassword FROM restaurant_review.userprofile WHERE userName = ? ";
        db.query(sql,[userName], callback);
    }


    createUser(useraccount, callback){
        var sql = "INSERT INTO userprofile (userName, firstName, lastName, userEmail, userAddress, userPassword, userPhone, userGender, userImage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [useraccount.getuserName(), useraccount.getfirstName(), useraccount.getlastName(), useraccount.getuserEmail(), useraccount.getuserAddress(), useraccount.getuserPassword(), useraccount.getuserPhone(),useraccount.getuserGender(),useraccount.getuserImage()], callback);
    }
    
    deleteAccount(userprofileID, callback){
        var sql = "DELETE from userprofile WHERE _id = ?";
        return db.query(sql, [userprofileID], callback);
    }
    updateUser(userName,firstName,lastName,userEmail,userAddress,userPassword,userPhone,userGender,userImage, callback){
        var sql = "UPDATE userprofile SET  firstName = ?, lastName = ?, userEmail = ?, userAddress = ?, userPassword = ?, userPhone = ?, userGender = ?, userImage = ? WHERE userName = ?";
        return db.query(sql, [firstName,lastName,userEmail,userAddress,userPassword,userPhone,userGender,userImage, userName], callback);
    }

    updateUserpassword(userName,userPassword, callback){
        var sql = "UPDATE userprofile SET  userPassword = ? WHERE userName = ?";
        return db.query(sql, [userPassword,userName], callback);
    }

    resetUserpassword(userEmail,userPassword, callback){
        var sql = "UPDATE userprofile SET  userPassword = ? WHERE userEmail = ?";
        return db.query(sql, [userPassword, userEmail], callback);
    }
}

module.exports = userprofileDB;