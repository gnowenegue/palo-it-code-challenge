import convertMinsToHrs from '../../helpers/convertMinsToHrs';

describe('convertMinsToHrs()', () => {
  describe('Correct results', () => {
    test('0 min = 0 hr, 0 min', () => {
      const input = 0;
      expect(convertMinsToHrs(input)).toEqual({
        hrs: 0,
        mins: 0,
        originalMins: input,
      });
    });

    test('30 min = 0 hr, 30 min', () => {
      const input = 30;
      expect(convertMinsToHrs(input)).toEqual({
        hrs: 0,
        mins: 30,
        originalMins: input,
      });
    });

    test('60 min = 1 hr, 0 min', () => {
      const input = 60;
      expect(convertMinsToHrs(input)).toEqual({
        hrs: 1,
        mins: 0,
        originalMins: input,
      });
    });

    test('90 min = 1 hr, 30 min', () => {
      const input = 90;
      expect(convertMinsToHrs(input)).toEqual({
        hrs: 1,
        mins: 30,
        originalMins: input,
      });
    });

    test('123 min = 2 hr, 3 min', () => {
      const input = 123;
      expect(convertMinsToHrs(input)).toEqual({
        hrs: 2,
        mins: 3,
        originalMins: input,
      });
    });
  });
  describe('Edge cases', () => {
    test('negative input', () => {
      const input = -1;
      expect(() => {
        convertMinsToHrs(input);
      }).toThrow('Input must be positive.');
    });

    test('string input', () => {
      const input = '123';
      expect(() => {
        convertMinsToHrs(input);
      }).toThrow('Input must be an integer.');
    });

    test('boolean input', () => {
      const input = false;
      expect(() => {
        convertMinsToHrs(input);
      }).toThrow('Input must be an integer.');
    });

    test('array input', () => {
      const input = [123];
      expect(() => {
        convertMinsToHrs(input);
      }).toThrow('Input must be an integer.');
    });

    test('float input', () => {
      const input = 1.23;
      expect(() => {
        convertMinsToHrs(input);
      }).toThrow('Input must be an integer.');
    });
  });
});
