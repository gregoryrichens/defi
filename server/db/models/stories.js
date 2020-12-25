const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  headline: String,
  blurb: String,
  link: String,
});

const Story = mongoose.model('Story', storySchema);

module.exports.Story = Story;