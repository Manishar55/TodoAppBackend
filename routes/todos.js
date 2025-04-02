

const express = require("express");

const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
// const { createTodo, getTodo } = require("../controllers/createTodo");


//define api routes

//path ko controller se map kara diya
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

module.exports=router;