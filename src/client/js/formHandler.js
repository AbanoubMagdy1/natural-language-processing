function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');

  fetch(`http://localhost:3000/test?txt=${formText}`)
    .then(res => res.json())
    .then(function (data) {
      console.log(data);
      document.getElementById('results').innerHTML = data.score_tag;
    });
}

export { handleSubmit };
