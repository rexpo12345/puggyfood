"use strict";

class Restaurantsinfo {
    constructor(_id, restaurantMap, restaurantAddress, restaurantPhone, restaurantWebsite, restaurantEmail, restaurantNoreviews, restaurantImg, _idcommentPage) {
        this._id = _id;
        this.restaurantMap = restaurantMap;
        this.restaurantAddress = restaurantAddress;
        this.restaurantPhone = restaurantPhone;
        this.restaurantWebsite = restaurantWebsite;
        this.restaurantEmail = restaurantEmail;
        this.restaurantNoreviews = restaurantNoreviews;
        this.restaurantImg = restaurantImg;
        this._idcommentPage = _idcommentPage;
    }

    getId() {
        return this._id;
    }

    getrestaurantMap() {
        return this.restaurantMap;
    }

    getrestaurantAddress() {
        return this.restaurantAddress;
    }

    getrestaurantPhone() {
        return this.restaurantPhone;
    }

    getrestaurantWebsite() {
        return this.restaurantWebsite;
    }

    getrestaurantEmail() {
        return this.restaurantEmail;
    }

    getrestaurantNoreviews() {
        return this.restaurantNoreviews;
    }

    getrestaurantImg() {
        return this.restaurantImg;
    }

    get_idcommentPage() {
        return this._idcommentPage;
    }

    setId(_id) {
        this._id = _id;
    }

    setrestaurantMap(restaurantMap) {
        this.restaurantMap = restaurantMap;
    }

    setrestaurantAddress(restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    setrestaurantPhone(restaurantPhone) {
        this.restaurantPhone = restaurantPhone;
    }

    setrestaurantWebsite(restaurantWebsite) {
        this.restaurantWebsite = restaurantWebsite;
    }

    setrestaurantEmail(restaurantEmail) {
        this.restaurantEmail = restaurantEmail;
    }

    setrestaurantNoreviews(restaurantNoreviews) {
        this.restaurantNoreviews = restaurantNoreviews;
    }

    setrestaurantImg(restaurantImg) {
        this.restaurantImg = restaurantImg;
    }

    set_idcommentPage(_idcommentPage) {
        this._idcommentPage = _idcommentPage;
    }
}

module.exports = Restaurantsinfo;