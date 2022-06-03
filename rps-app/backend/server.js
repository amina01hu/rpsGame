// import and load the express module
const express = require('express'); 
const app = express(); // -> has methods for HTTP requests, middleware, views/templates, and modifying settings
const port = process.env.PORT || 3000; // -> env variable or 3000
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const cors = require('cors');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>{
    console.log("Database connected!");
})
app.use(express.json()); //-> activates body parser
app.use(cors()); //-> activates cors
app.use('/api', routes);
app.listen(port, () =>{ //-> starts server on specified port
    console.log(`App listening on port ${port}!`, "Also listening on " + port);
});