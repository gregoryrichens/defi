import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  storyContainer: {
    width: '100%',
    'margin-top': '10px',
  },
  newsThumbnail: {
    width: '33%',
  },
  newsText: {
    display: 'block',
  },
  headline: {
    'font-family': 'aktiv-grotesk',
    'font-size': '24px',
    'font-style': 'normal',
    'font-weight': '700',
    'letter-spacing': 'normal',
    'line-height': '33.7px',
    'text-transform': 'none',
    'margin-bottom': '10px',
    'text-decoration': 'none',
    'background-color': 'none',
    color: '#000000',
  },
  blurb: {
    'font-family': '"Helvetica"',
    'font-size': '18px',
    'font-style': 'normal',
    'font-weight': '300',
    'letter-spacing': 'normal',
    'line-height': '30px',
    'text-transform': 'none',
    'margin-bottom': '20px',
    'border-bottom': '1px #0000001f',
  },
});

function NewsStoriesItem({ headline, blurb, link }) {
  const classes = useStyles();

  return(
    <div className={classes.storyContainer}>
      <div className={classes.newsText}>
        <a className={classes.headline} href={link} target='_tab'>{headline.toLowerCase()}</a>
        <p className={classes.blurb}>{blurb}</p>
      </div>
      <Divider />
    </div>
  );
};

export default NewsStoriesItem;