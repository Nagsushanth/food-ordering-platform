const pool = require("../config/db");

const {
    createOrder,
    createOrderItem,
    getAllOrders
} = require("../models/orderModel");

const placeOrder = async (
    req,
    res
) => {

    try {

        const {
            user_id,
            items
        } = req.body;

        let totalAmount = 0;

        for (const item of items) {

            const menuResult =
                await pool.query(
                    `
                    SELECT *
                    FROM menu_items
                    WHERE id = $1
                    `,
                    [item.menu_item_id]
                );

            const menuItem =
                menuResult.rows[0];

            totalAmount +=
                menuItem.price *
                item.quantity;
        }

        const order =
            await createOrder(
                user_id,
                totalAmount
            );

        for (const item of items) {

            const menuResult =
                await pool.query(
                    `
                    SELECT *
                    FROM menu_items
                    WHERE id = $1
                    `,
                    [item.menu_item_id]
                );

            const menuItem =
                menuResult.rows[0];

            await createOrderItem(
                order.id,
                item.menu_item_id,
                item.quantity,
                menuItem.price
            );
        }

        res.status(201).json({
            message:
                "Order Placed Successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getOrders = async (
    req,
    res
) => {

    try {

        const orders =
            await getAllOrders();

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    placeOrder,
    getOrders
};