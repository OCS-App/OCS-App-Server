const api = require('express').Router();

const member = require('./member');
const company = require('./company');

api.use('/member', member);
api.use('/company', company);

module.exports = api;
