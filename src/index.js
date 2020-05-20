require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);
const api = require('./api');
const { PORT : port } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api)


server.listen(port, () => {
    console.log(`OCS-App-Server listening to ${port}`);
  });