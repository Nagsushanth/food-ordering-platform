const pool = require("../config/db");

const createRestaurant = async (
    name,
    cuisine,
    address,
    rating
) => {

    const result = await pool.query(
        `
        INSERT INTO restaurants
        (name,cuisine,address,rating)
        VALUES ($1,$2,$3,$4)
        RETURNING *
        `,
        [name, cuisine, address, rating]
    );

    return result.rows[0];
};

const getAllRestaurants = async () => {

    const result = await pool.query(
        `
        SELECT *
        FROM restaurants
        ORDER BY id
        `
    );

    return result.rows;
};

module.exports = {
    createRestaurant,
    getAllRestaurants
};