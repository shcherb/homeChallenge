import getActivityService from '../services/bored.service.mjs';
import { mapAccessibility, mapPrice } from '../utils/attributesMapper.util.mjs';

export default async function getActivityHandler(req, res, next) {
  try {
    const activityData = await getActivityService();
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
