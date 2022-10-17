const boredService = require('../services/bored.service');
const { mapAccessibility, mapPrice } = require('../utils/attributesMapper.util');

async function getActivityHandler(req, res, next) {
  try {
    const activityData = await boredService.getActivity();
    const activityResult = {
      ...activityData,
      accessibility: mapAccessibility(activityData.accessibility),
      price: mapPrice(activityData.price),
    };
    res.status(200).json(activityResult);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getActivityHandler,
};
