const { accessibilityEnum, priceEnum } = require('../config/constants');

function mapAccessibility(accessibility) {
  let accessibilityResult = accessibilityEnum.HIGH;
  if (accessibility > 0.75) {
    accessibilityResult = accessibilityEnum.LOW;
  } else if (accessibility > 0.25) {
    accessibilityResult = accessibilityEnum.MEDIUM;
  }
  return accessibilityResult;
}

function mapPrice(price) {
  let priceResult = priceEnum.HIGH;
  if (price === 0) {
    priceResult = priceEnum.FREE;
  } else if (price <= 0.5) {
    priceResult = priceEnum.LOW;
  }
  return priceResult;
}

module.exports = {
  mapAccessibility,
  mapPrice,
};
