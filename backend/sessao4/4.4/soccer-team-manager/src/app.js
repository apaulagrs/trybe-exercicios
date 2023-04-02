const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const teamsRouter = require('./routes/teamsRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.static('/images'));
app.use(express.json());

app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  return next(err);
});

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

app.use((_req, res) => res.sendStatus(404));

module.exports = app;