"use strict";

class Comment {
    constructor(_id, userLikes, userRatings, userPrices, commentDescription, timePosted, userProfileid, restaurantId) {
        this._id = _id;
        this.userLikes = userLikes;
        this.userRatings = userRatings;
        this.userPrices = userPrices;
        this.commentDescription = commentDescription;
        this.timePosted = timePosted;
        this.userProfileid = userProfileid;
        this.restaurantId = restaurantId;
    }

    getId() {
        return this._id;
    }

    getuserLikes() {
        return this.userLikes;
    }

    getuserRatings() {
        return this.userRatings;
    }

    getuserPrices() {
        return this.userPrices;
    }

    getcommentDescription() {
        return this.commentDescription;
    }

    gettimePosted() {
        return this.timePosted;
    }

    getuserProfileid() {
        return this.userProfileid;
    }
    getrestaurantId() {
        return this.restaurantId;
    }

    setId(_id) {
        this._id = _id;
    }

    setuserLikes(userLikes) {
        this.userLikes = userLikes;
    }

    setuserRatings(userRatings) {
        this.userRatings = userRatings;
    }

    setuserPrices(userPrices) {
        this.userPrices = userPrices;
    }

    setcommentDescription(commentDescription) {
        this.commentDescription = commentDescription;
    }

    settimePosted(timePosted) {
        this.timePosted = timePosted;
    }

    setuserProfileid(userProfileid) {
        this.userProfileid = userProfileid;
    }
    setrestaurantId(restaurantId) {
        this.restaurantId = this.restaurantId;
    }
}

module.exports = Comment;