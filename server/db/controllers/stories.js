const models = require('../models/stories.js');
const Parser = require('rss-parser');
let parser = new Parser();

const getStories = async function (req, res) {
  // grab stories from CoinDesk RSS feed and store in database
  try {
    let feed = await parser.parseURL('https://www.coindesk.com/feed');
    console.log(feed);
    let data = [];
    for (let item = 0; item < 3; item++) {
      let story = {
        headline: feed.items[item].title,
        blurb: feed.items[item].contentSnippet,
        link: feed.items[item].link,
        date: feed.items[item].pubDate,
      };
      data.push(story);
      console.log('story created');
    };
    res.json(data);
  } catch(err) {
    console.log(err);
  }
};

module.exports.getStories = getStories;