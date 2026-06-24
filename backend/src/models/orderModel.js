const pool = require("../config/db");

const createOrder = async (
    user_id,
    total_amount
) => {

    const result = await pool.query(
        `
        INSERT INTO orders
        (
            user_id,
            total_amount
        )
        VALUES ($1,$2)
        RETURNING *
        `,
        [
            user_id,
            total_amount
        ]
    );

    return result.rows[0];
};

const createOrderItem = async (
    order_id,
    menu_item_id,
    quantity,
    price
) => {

    const result = await pool.query(
        `
        INSERT INTO order_items
        (
            order_id,
            menu_item_id,
            quantity,
            price
        )
        VALUES ($1,$2,$3,$4)
        RETURNING *
        `,
        [
            order_id,
            menu_item_id,
            quantity,
            price
        ]
    );

    return result.rows[0];
};

const getAllOrders = async () => {

    const result = await pool.query(
        `
        SELECT *
        FROM orders
        ORDER BY id
        `
    );

    return result.rows;
};

module.exports = {
    createOrder,
    createOrderItem,
    getAllOrders
};