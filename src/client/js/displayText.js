const determinePolarity = polarity => {
  switch (polarity) {
    case 'P+':
      return 'Strongly positive';
    case 'P':
      return 'Positive';
    case 'P+':
      return 'Strongly Positive';
    case 'NEU':
      return 'Neutral';
    case 'N+':
      return 'Strongle Negative';
    case 'N':
      return 'Negative';
    default:
      return 'None';
  }
};

const displayText = data =>
  `
        <p>Do the different phrases have the same sentiment ? : ${
          data.agreement === 'AGREEMENT' ? 'Yes' : 'No'
        }</p>
        <p>The accuracy of this analysis : ${data.confidence}%</p>  
        <p>The polarity of your text : ${determinePolarity(data.score_tag)}</p>
    `;

export { displayText, determinePolarity };
