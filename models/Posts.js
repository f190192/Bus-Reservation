const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('user', userSchema);