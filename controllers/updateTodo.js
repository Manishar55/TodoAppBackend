

const Todo=require("../models/Todo");


exports.updateTodo = async(req, res)=>{
    try{
        const {id} =req.params;
        const {title, description}=req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, UpdatedAt: Date.now()},

        )

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Updated successfully'
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