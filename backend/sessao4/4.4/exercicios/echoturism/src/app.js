const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const activitiesRouter = require('./routes/activitiesRoute');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', activitiesRouter);

module.exports = app;