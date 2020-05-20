const member = require("express").Router();
const memberCtrl = require('./member.ctrl');

member.post('/login', memberCtrl.login);
member.post('/register', memberCtrl.register)

module.exports = member;