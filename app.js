'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes');
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', users); // remember to plug in your router and any other middleware you may need here.

module.exports = app; // this line is only used to make testing easier.






if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
