"use strict";
const ContanctformsDB = require('../models/contactformDB')
const Contactform = require('../models/contactforms')
const UserprofileDB = require('../models/userprofileDB');
const Userprofile = require('../models/userprofile');


const sgMail = require('@sendgrid/mail')
var userprofileDB = new UserprofileDB();
var contactformsDB = new ContanctformsDB();



function getContactform(request, respond) {

    contactformsDB.getContactfrom(function (error, result) {

        if (error) {

            respond.json(error);

        }

        else {

            respond.json(result);

        }

    });
}

function addContactform(request, respond) {
    var contactform = new Contactform(null, request.body.messageText, request.body.subject, request.body._userprofileid);
    contactformsDB.addContactform(contactform, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function updateContactform(request, respond) {

    var contactform = new Contactform(parseInt(request.params._id), request.body.messageText, request.body.subject, parseInt(request.params._userprofileid));
    contactformsDB.updateContactform(contactform, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function deleteContactform(request, respond) {
    var contactform = request.params._id;
    contactformsDB.deleteContactform(contactform, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function getUsernameEmailContactform(request, respond) {
    var contactform = new Contactform(null, null, null, parseInt(request.params._userProfileid));
    contactformsDB.getUsernameEmailContactform(contactform, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}


function sendEmail(request, respond) {

    var email = request.body.userEmail
    var subject = request.body.subject
    var messageText = request.body.messageText
    sgMail.setApiKey("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")
    const msg = {
        to: email, // Change to your recipient
        from: 'isaac_kwa@live.com.sg', // Change to your verified sender
        subject: subject,
        text: messageText,
        html: '<strong>'+ messageText +'</strong> your message has been recevied please give us 3 - 5 working days to get back to you.',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            respond.json({result:"success"});
        })
        .catch((error) => {
            console.error(error)
            respond.json({result:"fail"});
        })
    
}

function sendForgottenpassword(request, respond) {

    var email = request.body.userEmail
    sgMail.setApiKey("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")
    const msg = {
        to: email, // Change to your recipient
        from: 'isaac_kwa@live.com.sg', // Change to your verified sender
        subject: "Your new password",
        text: "Login to ",
        html: '<strong>THIS IS YOUR NEW PASSWORD:" newPass123 "</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            respond.json({result:"success"});
        })
        .catch((error) => {
            console.error(error)
            respond.json({result:"fail"});
        })
    
}


module.exports = { getContactform, addContactform, updateContactform, deleteContactform, getUsernameEmailContactform, sendEmail, sendForgottenpassword };