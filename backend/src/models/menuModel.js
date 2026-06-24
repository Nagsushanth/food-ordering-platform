const pool = require("../config/db");

const createMenuItem = async (
    restaurant_id,
    name,
    description,
    price
) => {

    const result = await pool.query(
        `
        INSERT INTO menu_items
        (
            restaurant_id,
            name,
            description,
            price
        )
        VALUES ($1,$2,$3,$4)
        RETURNING *
        `,
        [
            restaurant_id,
            name,
            description,
            price
        ]
    );

    return result.rows[0];
};

const getAllMenuItems = async () => {

    const result = await pool.query(
        `
        SELECT *
        FROM menu_items
        ORDER BY id
        `
    );

    return result.rows;
};

const getMenuByRestaurant = async (
    restaurantId
) => {

    const result = await pool.query(
        `
        SELECT *
        FROM menu_items
        WHERE restaurant_id = $1
        `,
        [restaurantId]
    );

    return result.rows;
};

module.exports = {
    createMenuItem,
    getAllMenuItems,
    getMenuByRestaurant
};