const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const openapiValidator = require('express-openapi-validator');

const activityRouter = require('./routes/activity.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  openapiValidator.middleware({
    apiSpec: path.resolve(__dirname, '../openapi/openapi.yaml'),
    validateRequests: true,
    validateResponses: true,
  }),
);

app.use('/activity', activityRouter);

app.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

module.exports = app;
