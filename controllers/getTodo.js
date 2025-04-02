
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


//to get a sigle todo
exports.getTodoById=async(req, res)=>{
    try{
        //extract todo item basis on id
        const id=req.params.id;
        const todo=await Todo.findById({_id: id})

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No data found with given id"
            })
        }

        //data for given id  found
        res.status(202).json({
            success: true,
            message: `Todo ${id} data successfully fetched`,
            data:todo,
        })
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