const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
const { getAllRuns } = require('../database/index');

const PORT = process.env.PORT || 2228;

app.get('/run', (req, res) => {
  getAllRuns((err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});