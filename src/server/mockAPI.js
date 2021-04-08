const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

function getSentimentAnalysis(txt) {
  return axios.get('https://api.meaningcloud.com/sentiment-2.1', {
    params: {
      key: process.env.application_key,
      lang: 'en',
      txt,
    },
  });
}

module.exports = getSentimentAnalysis;
