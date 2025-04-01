
//created instance of mongoose
const mongoose = require("mongoose");


//DATABASE_URL ka jo v cofiguration .env file me rakha hai usko agar process object k andar feed karna hai, 
// then .env library ko install karni padegi => npm i dotenv

//jo v appne .env k andar define kiya hai wo sara process object me load ho jayega 
require("dotenv").config();


//configuration for connecting the database
//it will establish a connection between your app & database
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log('DB connecton successful'))
    .catch((error)=>{
        console.log('Issue in DB connection');
        console.log(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;