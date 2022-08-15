"use strict";

class Restaurant {
    constructor(_id, restaurantName, restaurantLocation, restaurantCategory, restaurantRating, restaurantPrices, restaurantNoreviews, restaurantImg, _idcommentPage) {
        this._id = _id;
        this.restaurantName = restaurantName;
        this.restaurantLocation = restaurantLocation;
        this.restaurantCategory = restaurantCategory;
        this.restaurantRating = restaurantRating;
        this.restaurantPrices = restaurantPrices;
        this.restaurantNoreviews = restaurantNoreviews;
        this.restaurantImg = restaurantImg;
        this._idcommentPage = _idcommentPage;
    }

    getId() {
        return this._id;
    }

    getrestaurantName() {
        return this.restaurantName;
    }

    getrestaurantLocation() {
        return this.restaurantLocation;
    }

    getrestaurantCategory() {
        return this.restaurantCategory;
    }

    getrestaurantRating() {
        return this.restaurantRating;
    }

    getrestaurantPrices() {
        return this.restaurantPrices;
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

    setrestaurantName(restaurantName) {
        this.restaurantName = restaurantName;
    }

    setrestaurantLocation(restaurantLocation) {
        this.restaurantLocation = restaurantLocation;
    }

    setrestaurantCategory(restaurantCategory) {
        this.restaurantCategory = restaurantCategory;
    }

    setrestaurantRating(restaurantRating) {
        this.restaurantRating = restaurantRating;
    }

    setrestaurantPrices(restaurantPrices) {
        this.restaurantPrices = restaurantPrices;
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

module.exports = Restaurant;