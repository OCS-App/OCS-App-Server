const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema({
    name:{
        type: String,
        required: true
    },
    annualSalary: String,
    image: String
})

Company.statics.register = async function(name, annualSalary, image){
    company = new this({name, annualSalary, image});
    return company.save();
}

module.exports = mongoose.model('Company', Company)