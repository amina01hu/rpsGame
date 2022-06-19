// import and load the express module
const express = require('express'); 
const app = express(); // -> has methods for HTTP requests, middleware, views/templates, and modifying settings
const mongoose = require('mongoose'); //used to connect to the databse
const dotenv = require('dotenv'); //used for env variables
const cors = require('cors');
const port = process.env.PORT || 3000; //
const userModel = require('./schema/signupmodel');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>{
    console.log("Database connected!");
})
app.use(express.json()); //-> activates body parser
app.use(cors()); //-> activates cors

app.get("/usersList", (req, res) =>{
    userModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    }); //returns all data inside the current collection
})

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const signupuser = new userModel(user);
    await signupuser.save();
    res.json(user);
})

app.listen(port, () =>{ //-> starts server on specified port
    console.log(`App listening on port ${port}!`);
});