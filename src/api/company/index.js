const company = require("express").Router();
const companyCtrl = require('./company.ctrl');
const middlewareToken = require('../../middleWare/auth');

console.log("Test");
module.exports = company;