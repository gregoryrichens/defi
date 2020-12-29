import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import NewsStoriesItem from './NewsStoriesItem.jsx';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  stories: {
    display: 'block',
    position: 'relative',
    'margin-left': '10%',
    'flex-grow': '1',
    width: '33%',
  },
  heading: {
    display: 'flex',
    'flex-direction': 'row',
  },
  sectionTitle: {
    'align-self': 'flex-end',
    'font-family': 'aktiv-grotesk',
    'font-size': '24px',
    'font-style': 'normal',
    'font-weight': '700',
    'letter-spacing': 'normal',
    'line-height': '33.6px',
    'text-transform': 'none',
    'margin-left': 'auto',
  },
  sectionNumber: {
    'align-self': 'flex-start',
    'font-family': '"Roboto Mono"',
    'font-size': '40px',
    'font-style': 'normal',
    'font-weight': '400',
    'letter-spacing': 'normal',
    'line-height': '56px',
    'text-transform': 'none',
  },
});

function NewsStories() {
  const storyFiller = [{headline: 'story 1', blurb: 'blurb 1', link: 'link 1'}, {headline: 'story 2', blurb: 'blurb 2', link: 'link 2'}, {headline: 'story 3', blurb: 'blurb 3', link: 'link 3'}]
  const [stories, setStories] = useState(storyFiller);
  const classes = useStyles();

  useEffect(() => {
    axios.get('/api/stories')
      .then((results) => {
        setStories(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.stories}>
      <div className={classes.heading}>
        <div className={classes.sectionNumber}>01</div>
        <div className={classes.sectionTitle}>news.</div>
      </div>
      <Divider />
      {stories.map((story, index) => {
        return (
          <NewsStoriesItem headline={story.headline} blurb={story.blurb} link={story.link} key={index} />
        )
      })}
    </div>
  );
};

export default NewsStories;