const Story = require('../models/stories.js');
const axios = require('axios');
const $ = require('jQuery');

async function getStories (req, res) {
  // grab stories from CoinDesk RSS feed and store in database
  try {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const results = await axios.get({url: 'https://www.coindesk.com/feed', withCredentials: false});
    console.log(results);
    const xmlDoc = $.parseXML( results ),
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
      await Story.create(storyObject);
    });
  } catch(error) {
    console.log(error);
    res.status(400).send(error);
  }

  // pull three most recent stories from database
  try {
    const data = await Story.find({}).limit(3);
    res.json(data);
  } catch(error) {
    console.log(error);
    res.status(404).send(error);
  }
}

export default getStories;