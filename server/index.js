const express = require('express');
const mongoose = require('mongoose');
const controllers = require('./db/controllers/stories.js');
const path = require('path');

const app = express();
const port = 8080;

// set up mongoose connection with address for ec2 tweet storage
mongoose.connect('mongodb://localhost/defi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('read the waiting launch orders');
});

app.use(express.static('public'));
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Move Zig');
});

app.get('/api/stories', controllers.getStories);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});