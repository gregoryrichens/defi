const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

// set up mongoose connection with address for ec2 tweet storage

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Move Zig');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})