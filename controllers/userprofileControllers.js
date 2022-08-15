"use strict";
const UserprofileDB = require('../models/userprofileDB');
const Userprofile = require('../models/userprofile');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const req = require('express/lib/request');
var userprofileDB = new UserprofileDB();
var secret = "somesecertkey"

function getAlluserprofiles(request, respond) {
    userprofileDB.getAlluserprofiles(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}

function loginUser(request, respond) {

    var userName = request.body.userName;
    var userPassword = request.body.userPassword;

    userprofileDB.loginUser(userName, function (error, result) {
        if (error) {
            respond.json(error);
            respond.json({ result: "invalid" });
        } 
        else {
            // console.log(result[0].userPassword);
            const hash = result[0].userPassword;
            var flag = bcrypt.compareSync(userPassword, hash);
            if (flag){
                var token = jwt.sign(userName, secret);
                respond.json({ result: token });
            } else {
                console.log("invalid")
                respond.json({ result: "invalid" });
            }
        }
    })
}

function getUser(request, respond) {

    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        userprofileDB.getUser(decoded, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({ result: "invalid token" });
    }

}

function createUser(request, respond) {
    // var now = new Date();
    var userImage = request.body.userImage
    userImage = "puggysmurik.gif"
    var password = request.body.userPassword
    password = bcrypt.hashSync(password, 10)
    var useraccount = new Userprofile(null, request.body.userName, request.body.firstName, request.body.lastName, request.body.userEmail, request.body.userAddress, password, request.body.userPhone, request.body.userGender, userImage);
    userprofileDB.createUser(useraccount, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function updateUser(request, respond) {

    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var userEmail = request.body.userEmail;
    var userAddress = request.body.userAddress;
    var userPassword = request.body.userPassword;
    var userPhone = request.body.userPhone;
    var userGender = request.body.userGender;
    var userImage = request.body.userImage;
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        userprofileDB.updateUser(decoded, firstName, lastName, userEmail, userAddress, userPassword, userPhone, userGender, userImage, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({ result: "invalid token" });
    }
}

function updateUserpassword(request, respond) {
    var token = request.body.token;
    var userPassword = request.body.userPassword;
    userPassword = bcrypt.hashSync(userPassword, 10)

    try {
        var decoded = jwt.verify(token, secret);
        userprofileDB.updateUserpassword(decoded, userPassword, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({ result: "invalid token" });
    }
}

function resetUserpassword(request, respond) {
 
    var userEmail = request.body.userEmail
    var userPassword = request.body.userPassword;
    userPassword = bcrypt.hashSync(userPassword, 10)

    try {
     
        userprofileDB.resetUserpassword(userEmail,userPassword, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({ result: "invalid token" });
    }
}



function deleteAccount(request, respond) {
    var userprofileID = request.params._id;
    userprofileDB.deleteAccount(userprofileID, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAlluserprofiles, updateUser, createUser, deleteAccount, loginUser, getUser, updateUserpassword, resetUserpassword };