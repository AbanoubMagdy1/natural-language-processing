import sentimentAnalysis from '../src/server/mockAPI';

test('Sentiment Anlaysis function return a corrent response', () => {
  sentimentAnalysis('I want to play with you').then(res => {
    expect(res.data.agreement).toEqual('AGREEMENT');
  });
  expect(sentimentAnalysis).toBeDefined();
});
