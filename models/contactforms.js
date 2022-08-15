"use strict";

class Contactform {
    constructor(_id, messageText, subject, _userProfileid) {
        this._id = _id;
        this.messageText = messageText;
        this.subject = subject;
        this._userProfileid = _userProfileid;
    }

    getId() {
        return this._id;
    }

    getmessageText() {
        return this.messageText;
    }

    getsubject() {
        return this.subject;
    }

    getuserProfileid() {
        return this._userProfileid;
    }


    setId(_id) {
        this._id = _id;
    }

    setmessageText(messageText) {
        this.messageText = messageText;
    }

    setsubject(subject) {
        this.subject = subject;
    }

    setuserProfileid(_userProfileid) {
        this._userProfileid = _userProfileid;
    }

}

module.exports = Contactform;