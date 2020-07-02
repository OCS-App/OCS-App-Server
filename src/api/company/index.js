const company = require("express").Router();
const companyCtrl = require('./company.ctrl');
const middlewareToken = require('../../middleWare/auth');
const upload = require('../../lib/uplode');

company.post('/sharingcompany', middlewareToken, upload.single('image'), companyCtrl.SharingCompany);

module.exports = company;