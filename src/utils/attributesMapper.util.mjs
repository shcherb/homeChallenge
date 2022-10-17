import { accessibilityEnum, priceEnum } from '../config/constants.mjs';

export function mapAccessibility(accessibility) {
  let accessibilityResult = accessibilityEnum.HIGH;
  if (accessibility > 0.75) {
    accessibilityResult = accessibilityEnum.LOW;
  } else if (accessibility > 0.25) {
    accessibilityResult = accessibilityEnum.MEDIUM;
  }
  return accessibilityResult;
}

export function mapPrice(price) {
  let priceResult = priceEnum.HIGH;
  if (price === 0) {
    priceResult = priceEnum.FREE;
  } else if (price <= 0.5) {
    priceResult = priceEnum.LOW;
  }
  return priceResult;
}
