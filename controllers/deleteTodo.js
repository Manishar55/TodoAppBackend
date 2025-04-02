

const Todo=require("../models/Todo");


exports.deleteTodo = async(req, res)=>{
    try{
       
        //id find out
        const {id}= req.params;

        await Todo.findByIdAndDelete(id);


        //send a json response with a success flag
        res.json(
            {
                success:true,
                message:'Todo deleted'
            }
        );
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