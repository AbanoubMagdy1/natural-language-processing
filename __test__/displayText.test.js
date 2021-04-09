import { determinePolarity } from '../src/client/js/displayText';

test('Check for determination of polarity', () => {
  expect(determinePolarity('N+')).toEqual('Strongle Negative');
  expect(determinePolarity('P')).toEqual('Positive');
});
