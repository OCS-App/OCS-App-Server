const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema({
    name:{
        type: String,
        required: true
    },
    annualSalary: String,
    


})