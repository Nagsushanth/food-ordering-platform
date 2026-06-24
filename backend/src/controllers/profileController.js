const getProfile = (req, res) => {

    res.json({
        message: "Profile Access Granted",
        user: req.user
    });

};

module.exports = {
    getProfile
};