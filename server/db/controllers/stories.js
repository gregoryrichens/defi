const models = require('../models/stories.js');
const axios = require('axios');
const $ = require('jquery');

const getStories = async function (req, res) {
  // grab stories from CoinDesk RSS feed and store in database
  try {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const results = await axios.get('https://www.coindesk.com/feed');
    console.log(results);
    const xmlDoc = $.parseXML(results),
    $xml = $( xmlDoc ),
    $xmlStories = $xml.find( 'item' );
    $xmlStories.each(async (i) => {
      const headline = this.find('title');
      const blurb = this.find('description');
      const link = this.find('link');
      const storyObject = {
        headline: headline.text,
        blurb: blurb.text,
        link: link.text,
      }
      await models.Story.create(storyObject);
    });
  } catch(error) {
    console.log(error);
  }

  // pull three most recent stories from database
  try {
    const data = await models.Story.find({}).limit(3);
    res.json(data);
  } catch(error) {
    console.log(error);
    res.sendStatus(404);
  }
};

module.exports.getStories = getStories;