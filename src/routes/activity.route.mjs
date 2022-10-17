import express from 'express';
import getActivityHandler from '../handlers/getActivity.handler.mjs';

const activityRouter = express.Router();

/* GET home page. */
activityRouter.get('/', getActivityHandler);

export default activityRouter;
