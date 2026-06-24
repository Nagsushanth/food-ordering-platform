const {
    createMenuItem,
    getAllMenuItems,
    getMenuByRestaurant
} = require("../models/menuModel");

const addMenuItem = async (
    req,
    res
) => {

    try {

        const {
            restaurant_id,
            name,
            description,
            price
        } = req.body;

        const menuItem =
            await createMenuItem(
                restaurant_id,
                name,
                description,
                price
            );

        res.status(201).json(
            menuItem
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getMenuItems = async (
    req,
    res
) => {

    try {

        const items =
            await getAllMenuItems();

        res.json(items);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getRestaurantMenu = async (
    req,
    res
) => {

    try {

        const items =
            await getMenuByRestaurant(
                req.params.id
            );

        res.json(items);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addMenuItem,
    getMenuItems,
    getRestaurantMenu
};