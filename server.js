'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const weatherRouter = require('./routes/weather');

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', weatherRouter);

app.listen(PORT, () => console.log('Server Listening Alright!', PORT));
