import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Timeline } from 'react-twitter-widgets';

const useStyles = makeStyles({
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
  tweets: {
    display: 'block',
    'flex-grow': '2',
    width: '66%',
    margin: '0 5% 0 40px',
  },
});

function ThinkerFeed() {
  const classes = useStyles();

  return (
    <div className={classes.tweets}>
      <div className={classes.heading}>
        <div className={classes.sectionNumber}>02</div>
        <div className={classes.sectionTitle}>thinkerfeed.</div>
      </div>
      <Divider />
      <Timeline
        dataSource={{
          sourceType: 'list',
          ownerScreenName: 'gregrichens',
          id: '1341464597925044224'
        }}
        options={{
          height: '90vh',
          width: '75%',
          chrome: 'noheader nofooter noscrollbar noborder'
        }}
        marginBottom='10px'
      />
    </div>
  );
};

export default ThinkerFeed;