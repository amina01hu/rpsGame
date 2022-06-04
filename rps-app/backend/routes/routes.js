const { request } = require('express');
const express = require('express');
const router = express.Router(); //add a router
const signupcopy = require('../schema/signupmodel') //import signup schema

router.post('/signup', (req, res) =>{
    console.log(req.body);
    const signupuser = new signupcopy({ //get schema info from post responde
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });

    signupuser.save() //save user info
    .then(data => { //send data if words
        res.json(data)
    })
    .catch(error => { //send error if failed
        res.json(error)
    })
})


module.exports = router;