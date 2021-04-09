const resultContainer = document.getElementById('results');

const handleSubmit = event => {
  event.preventDefault();
  resultContainer.innerHTML = '';
  let formText = document.getElementById('text').value;

  if (formText.trim()) {
    fetch(`http://localhost:3000/test?txt=${formText}`)
      .then(res => res.json())
      .then(function (data) {
        resultContainer.innerHTML = Client.displayText(data);
      })
      .catch(() => {
        resultContainer.innerHTML =
          'Something goes wrong, please try again later';
      });
  } else {
    resultContainer.innerHTML = '<p>Please Enter something</p>';
  }
};

export { handleSubmit };
