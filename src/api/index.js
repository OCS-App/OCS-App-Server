const api = require('express').Router();
const member = require('./member');

api.use('/member', member);

module.exports = api;