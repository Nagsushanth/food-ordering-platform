require("dotenv").config();

const express = require("express");

const app = express();

const authRoutes = require("./routes/authRoutes");

const profileRoutes =
require("./routes/profileRoutes");

const restaurantRoutes =
require("./routes/restaurantRoutes");

const menuRoutes =
require("./routes/menuRoutes");

const orderRoutes =
require("./routes/orderRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use(
    "/api/restaurants",
    restaurantRoutes
);

app.use(
    "/api/menu",
    menuRoutes
);

app.use(
    "/api/orders",
    orderRoutes
);

app.get("/", (req, res) => {
  res.json({
    message: "Food Ordering Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});