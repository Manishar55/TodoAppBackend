
const Todo=require("../models/Todo");


//it contains the business logic => how to interact with the req
//define route handler
exports.getTodo = async(req, res)=>{
    try{
        
        //fetch router handler
        const todos = await Todo.find({});


        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire todo data is fetched'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",
        });  
    }
}