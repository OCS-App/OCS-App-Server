require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose')

const app = express();
const server = http.createServer(app);
const api = require('./api');
const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api)
app.use('/', express.static('public'));

mongoose.connect(mongo_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(response => {
  console.log(`Successfully connected to mongodb url: ${mongo_url}`)
}).catch(e => {
  console.error(e)
})


server.listen(port, () => {
  console.log(`OCS-App-Server listening to ${port}`);
});