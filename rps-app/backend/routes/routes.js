const { request } = require('express');
const express = require('express');
const router = express.Router();
const signupcopy = require('../schema/signupmodel')

router.post('/signup', (req, res) =>{
    const signupuser = new signupcopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });

    signupuser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


module.exports = router;