const {
    createRestaurant,
    getAllRestaurants
} = require("../models/restaurantModel");

const addRestaurant = async (
    req,
    res
) => {

    try {

        const {
            name,
            cuisine,
            address,
            rating
        } = req.body;

        const restaurant =
            await createRestaurant(
                name,
                cuisine,
                address,
                rating
            );

        res.status(201).json(
            restaurant
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getRestaurants = async (
    req,
    res
) => {

    try {

        const restaurants =
            await getAllRestaurants();

        res.json(restaurants);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addRestaurant,
    getRestaurants
};