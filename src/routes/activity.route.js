const express = require('express');
const { getActivityHandler } = require('../handlers/getActivity.handler');

const router = express.Router();

/* GET home page. */
router.get('/', getActivityHandler);

module.exports = router;
