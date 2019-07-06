const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
const { getAllRuns, getAllLifts, getOneRun } = require('../database/index');

const PORT = process.env.PORT || 2228;

// gets all runs using async and await
app.get('/run', async function(req, res) {
  const data = await getAllRuns();
  res.send(data[0]);
});

// gets all lifts using async and await
app.get('/lift', async function(req, res) {
  const data = await getAllLifts();
  res.send(data[0]);
});

// gets one run data depending on user click
app.get('/run/:id', async function(req, res) {
  const { id } = req.params;
  const data = await getOneRun(id);
  res.send(data[0]);
});


app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});