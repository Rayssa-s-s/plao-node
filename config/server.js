const express = require('express');
const consig = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const msg = require('../mod_test');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');



app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consig()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

module.exports = app;