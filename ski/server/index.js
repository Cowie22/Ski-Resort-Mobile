const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
const { getAllRuns } = require('../database/index');

const PORT = process.env.PORT || 2228;

// gets all runs using async and await
app.get('/run', async function(req, res) {
  const data = await getAllRuns();
  res.send(data[0]);
});


app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});