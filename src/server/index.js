const path = require('path');
const express = require('express');
const cors = require('cors');
const sentimentAnalysis = require('./mockAPI.js');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static('dist'));

console.log(__dirname);
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
  sentimentAnalysis(req.query.txt)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
