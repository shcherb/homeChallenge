const { mapAccessibility, mapPrice } = require('../../src/utils/attributesMapper.util');
const { accessibilityEnum, priceEnum } = require('../../src/config/constants');

describe('Test of the accessibility and price mappers', () => {
  describe('Accessibility mapper test', () => {
    test('Should return "LOW" if the mapper is invoked with the number above 0.75', () => {
      expect(mapAccessibility(0.76)).toBe(accessibilityEnum.LOW);
      expect(mapAccessibility(0.75)).not.toBe(accessibilityEnum.LOW);
    });

    test('Should return "MEDIUM" if the mapper is invoked with the number above 0.25 and below or equal 0.75', () => {
      expect(mapAccessibility(0.26)).toBe(accessibilityEnum.MEDIUM);
      expect(mapAccessibility(0.75)).toBe(accessibilityEnum.MEDIUM);
      expect(mapAccessibility(0.25)).not.toBe(accessibilityEnum.MEDIUM);
      expect(mapAccessibility(0.76)).not.toBe(accessibilityEnum.MEDIUM);
    });

    test('Should return "HIGH" if the mapper is invoked with the number below or equal 0.25', () => {
      expect(mapAccessibility(0.25)).toBe(accessibilityEnum.HIGH);
      expect(mapAccessibility(0.24)).toBe(accessibilityEnum.HIGH);
      expect(mapAccessibility(0.26)).not.toBe(accessibilityEnum.HIGH);
    });
  });

  describe('Price mapper test', () => {
    test('Should return "LOW" if the mapper is invoked with the number below or equal 0.5', () => {
      expect(mapPrice(0.49)).toBe(priceEnum.LOW);
      expect(mapPrice(0.5)).toBe(priceEnum.LOW);
      expect(mapPrice(0.51)).not.toBe(priceEnum.LOW);
      expect(mapPrice(0)).not.toBe(priceEnum.LOW);
    });

    test('Should return "HIGH" if the mapper is invoked with the number above 0.5', () => {
      expect(mapPrice(0.51)).toBe(priceEnum.HIGH);
      expect(mapPrice(0.5)).not.toBe(priceEnum.HIGH);
    });

    test('Should return "FREE" if the mapper is invoked with the number equal 0', () => {
      expect(mapPrice(0)).toBe(priceEnum.FREE);
      expect(mapPrice(0.1)).not.toBe(priceEnum.FREE);
    });
  });
});
