const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Member = new Schema({
    e_mail: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        required: true
    },
    name: String,
    grade: Number,
    classNum: Number,
    number: Number,
    major: String
})

Member.statics.registerAccount = async function ({ e_mail, pw, name, grade, classNum, number, major }) {
    const member = new this({ e_mail, pw, name, grade, classNum, number, major })
    return member.save();
}

Member.statics.findMemberEmail = async function (e_mail) {
    return this.findOne({ 'e_mail': e_mail });
}

Member.statics.findMemberForLogin = async function (e_mail, pw) {
    return this.findOne({ 'e_mail': e_mail, 'pw': pw });
}
module.exports = mongoose.model('Member', Member)
