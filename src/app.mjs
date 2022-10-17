import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import openapiValidator from 'express-openapi-validator';
import activityRouter from './routes/activity.route.mjs';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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

// module.exports = app;
export default app;