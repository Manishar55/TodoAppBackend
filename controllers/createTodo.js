
//creating a todo object & inetrting it into db

const { response } = require("express");
const Todo=require("../models/Todo");


//it contains the business logic => how to interact with the req
//define route handler
exports.createTodo = async(req, res)=>{
    try{
        //extract title & description from request body
        const {title, description}=req.body;

        //create a new Todo obj and insert into DB
        const res=await Todo.create({title, description});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created successfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message,
        });  
    }
}