const mongoose = require('mongoose');

const signuptemplate = new mongoose.Schema({ //schema for database collection
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', signuptemplate); //add to mytable