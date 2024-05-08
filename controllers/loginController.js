const asyncHandler = require("express-async-handler");

// GET Login Page
// GET /
const getLogin = (req, res) => {
    res.render("home");
};

// Login User
// POST /
const loginUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body;

    if(username === "admin" && password === "1234"){

    }
});

module.exports = { getLogin, loginUser };