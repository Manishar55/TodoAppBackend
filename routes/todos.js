

const express = require("express");

const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");

//define api routes

//path ko controller se map kara diya
router.post("/createTodo", createTodo);

module.exports=router;