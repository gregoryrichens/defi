const models = require('../models/stories.js');
const Parser = require('rss-parser');
let parser = new Parser();

const getStories = async function (req, res) {
  // grab stories from CoinDesk RSS feed and store in database
  try {
    let feed = await parser.parseURL('https://www.coindesk.com/feed');
    console.log(feed);
    for (let item of feed.items) {
      let story = await {
        headline: item.title,
        blurb: item.contentSnippet,
        link: item.link,
        date: item.pubDate,
      };
      await models.Story.create(story);
      console.log('story created');
    };
    const data = await models.Story.find({}).limit(3);
    res.json(data);
  } catch(err) {
    console.log(err);
  }
};

module.exports.getStories = getStories;