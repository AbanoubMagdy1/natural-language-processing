const handleSubmit = event => {
  event.preventDefault();
  const resultContainer = document.getElementById('results');
  const formText = document.getElementById('text').value;

  resultContainer.innerHTML = '';

  if (formText.trim()) {
    fetch(`http://localhost:3000/test?txt=${formText}`)
      .then(res => res.json())
      .then(function (data) {
        resultContainer.innerHTML = Client.displayText(data);
      })
      .catch(() => {
        resultContainer.innerHTML =
          '<p>Something goes wrong, please try again later</p>';
      });
  } else {
    resultContainer.innerHTML = '<p>Please Enter something</p>';
  }
};

export { handleSubmit };
