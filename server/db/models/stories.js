const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  headline: {type: String, unique: true, dropDups: true},
  blurb: String,
  link: String,
  date: String,
});

const Story = mongoose.model('Story', storySchema);

module.exports.Story = Story;