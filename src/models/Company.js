const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    location: String,
    instructions: String,
    requirement: String,
    additions: String,
    annualSalary: String,
    welfare: String

    
})

Company.statics.sharing = async function (name, image, location, instructions, requirement, additions, annualSalary, welfare) {
    company = new this({name, image, location, instructions, requirement, additions, annualSalary, welfare });
    return company.save();
}

module.exports = mongoose.model('Company', Company)