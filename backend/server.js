// import and load the express module
const express = require('express'); 
const app = express(); // -> has methods for HTTP requests, middleware, views/templates, and modifying settings
const port = 3000; // -> declaring port 3000

app.get('/', function(req, res){ // -> this is a route definition for http://localhost:3000/ (for example, will be changed)
    res.send("Hello World, testing backend");
});

app.listen(port, function(){ //-> starts server on specified port
    console.log(`App listening on port ${port}!`, "Also listening on " + port);
});