const asyncHandler = require("express-async-handler");
const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/loginRoutes");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

// GET Login Page
// GET /
const getLogin = (req, res) => {
    res.render("home");
};

// Login User
// POST /
const loginUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body;
    const user = await models.users.findOne({ where: { username } });
    if(!user){
        return res.json({ message: "일치하는 사용자가 없습니다."});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.json({ message: "비밀번호가 맞지 않습니다."});
    }
    // token generate
    const token = jwt.sign( { id: user.id}, jwtSecret);
    res.cookie("token", token, {httpOnly: true});
    res.redirect("/contacts");
});

// Logout User
// GET /logout
const logoutUser = asyncHandler(async(req, res) => {
    res.clearCookie('token');
    res.redirect("/")
});


// Register Page
// GET /register
const getRegister = (req, res) => {
    res.render("register");
};

// Register User
// POST /register
const registerUser = asyncHandler(async(req, res) => {
    const { username, password, password2 } = req.body;
    if(password === password2){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await models.users.create({
            username: username,
            password: hashedPassword,
        });
        res.json({message:"Register Successful", user});
    }else{
        res.send("Register Faild");
    }
});

module.exports = { getLogin, loginUser, getRegister, registerUser, logoutUser };