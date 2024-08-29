const express = require("express");
const { hashPassword } = require("../services/hashPassword");
const { validateSchema, schema } = require("../services/validateData");
const { addUser, oneUser, deleteUser, getAll } = require("../controller/userController");
const { login, logout, refresh } = require("../controller/authController");

const router = express.Router();

// Login route
router.post('/login', login)

// Logout route
router.get('/logout', logout)

// Refresh route
router.get('/refresh', refresh)


// User router

//Get all users
router.get('/user', getAll)

// Get one user
router.get('/user/:id', oneUser)

// Create user
router.post("/user/create",validateSchema(schema), hashPassword, addUser)

// Delete user
router.delete('/user/:id', deleteUser)

module.exports = router;