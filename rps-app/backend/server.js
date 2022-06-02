// import and load the express module
const express = require('express'); 
const app = express(); // -> has methods for HTTP requests, middleware, views/templates, and modifying settings
const port = process.env.PORT || 3000; // -> env variable or 3000

app.get('/', (req, res) => { // -> this is a route definition for http://localhost:3000/ (for example, will be changed)
    res.send("Hello World, testing backend");
});

app.get('/api/users', (req, res) => {
    res.send({"user1": "Amina", "user2":"Johnny"});
})

app.listen(port, () =>{ //-> starts server on specified port
    console.log(`App listening on port ${port}!`, "Also listening on " + port);
});