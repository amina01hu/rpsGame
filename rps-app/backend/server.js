// import and load the express module
const express = require('express'); 
const app = express(); // -> has methods for HTTP requests, middleware, views/templates, and modifying settings
const mongoose = require('mongoose'); //used to connect to the databse
const dotenv = require('dotenv'); //used for env variables
const routes = require('./routes/routes'); //call routes.js after receiving call here
const cors = require('cors');
const port = process.env.PORT || 3000; //

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>{
    console.log("Database connected!");
})
app.use(express.json()); //-> activates body parser
app.use(cors()); //-> activates cors
app.use('/api', routes); //activates router api after call (/api/sign)
app.listen(port, () =>{ //-> starts server on specified port
    console.log(`App listening on port ${port}!`);
});