"use strict";

class userprofile {
    constructor(_id, userName, firstName, lastName, userEmail, userAddress, userPassword, userPhone, userGender, userImage) {
        this._id = _id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.userPhone = userPhone;
        this.userGender = userGender;
        this.userImage = userImage;
    }

    getId() {
        return this._id;
    }

    getuserName() {
        return this.userName;
    }

    getfirstName() {
        return this.firstName;
    }

    getlastName() {
        return this.lastName;
    }

    getuserEmail() {
        return this.userEmail;
    }

    getuserAddress() {
        return this.userAddress;
    }

    getuserPassword() {
        return this.userPassword;
    }

    getuserPhone() {
        return this.userPhone;
    }

    getuserGender() {
        return this.userGender;
    }

    getuserImage() {
        return this.userImage;
    }

    setId(_id) {
        this._id = _id;
    }

    setuserName(userName) {
        this.userName = userName;
    }

    setfirstName(firstName) {
        this.firstName = firstName;
    }

    setlastName(lastName) {
        this.lastName = lastName;
    }

    setuserEmail(userEmail) {
        this.userEmail = userEmail;
    }

    setuserAddress(userAddress) {
        this.userAddress = userAddress;
    }

    setuserPassword(userPassword) {
        this.userPassword = userPassword;
    }

    setuserPhone(userPhone) {
        this.userPhone = userPhone;
    }

    setuserGender(userGender) {
        this.userGender = userGender;
    }

    setuserImage(userImage) {
        this.userImage = userImage;
    }
}

module.exports = userprofile;