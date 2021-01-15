const express = require('express');
const mongoose = require('mongoose');
const stories = require('./db/controllers/stories.js');
const contacts = require('./db/controllers/contacts.js')

const app = express();
const port = 3000;

// set up mongoose connection with address for ec2 tweet storage
mongoose.connect('mongodb://database/defi', {
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

app.use(express.static('build'));
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Move Zig');
});

app.get('/api/stories', stories.getStories);

app.post('/api/email', contacts.createContact)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});