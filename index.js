
//created server
const  express =require("express");
const app = express();


//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//midlleware to parse json request body
app.use(express.json());


//import routes for todo api
const todoRoutes = require("./routes/todos");

//we need to mount all the routes
app.use("/api/v1", todoRoutes);


app.listen(PORT, ()=>{
    console.log(`App is running successfully at ${PORT}`);
});


//connect to the database
const dbConnect = require("./config/database");
dbConnect();


//default Route
app.get("/", (req, res)=>{
    res.send(`<h1>This is homepage </h1>`);
});