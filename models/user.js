let express = require('express');

let mongoose = require('mongoose');




const UserSchema = mongoose.Schema({
    name: String,
    surname:String,
    middlename:String,
    password:String,
    location: String,

})

const user = mongoose.model('user' , UserSchema);

module.exports = user;