const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
    type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        requried:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:Number
    },
    salary:{
        type:Number,
        required: true
    }
});
const person =mongoose.model('person',personschema);