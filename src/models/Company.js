const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, // 이름
    image: String, // 이미지
    location: String, //주소
    instructions: String, // 업무분야
    requirement: String, // 인재상
    additions: String, // 소개
    annualSalary: String, //연봉
    welfare: String //복지
})

Company.statics.sharing = async function (name, image, location, instructions, requirement, additions, annualSalary, welfare) {
    company = new this({name, image, location, instructions, requirement, additions, annualSalary, welfare });
    return company.save();
}

Company.statics.findCompanyName = async function (name) {
    return this.findOne({ 'name': name });
}

Company.statics.findCompanyAllInfo = async function(){
    return this.find({});
}

module.exports = mongoose.model('Company', Company)
