const express = require("express");

const router = express.Router();

const {
    addMenuItem,
    getMenuItems,
    getRestaurantMenu
} = require(
    "../controllers/menuController"
);

router.post(
    "/",
    addMenuItem
);

router.get(
    "/",
    getMenuItems
);

router.get(
    "/restaurant/:id",
    getRestaurantMenu
);

module.exports = router;