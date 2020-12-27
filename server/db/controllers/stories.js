const models = require('../models/stories.js');
const Parser = require('rss-parser');
let parser = new Parser();

const getStories = async function (req, res) {
  // grab stories from CoinDesk RSS feed and store in database

  let feed = await parser.parseURL('https://www.coindesk.com/feed');
  await feed.items.forEach(async (item) => {
    let story = {
      headline: item.title,
      blurb: item.description,
      link: item.link,
      date: item.date,
    };
    await models.Story.create(story);
    console.log('story created');
  });

  const data = await models.Story.find({}).limit(3);
  console.log(data);
  res.json(data);
};

module.exports.getStories = getStories;