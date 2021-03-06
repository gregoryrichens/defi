import React, { useState } from 'react';
import MainView from './MainView.jsx';
import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
import NewsStories from './NewsStories.jsx';
import ThinkerFeed from './ThinkerFeed.jsx';
import SubscribeForm from './SubscribeForm.jsx';
import Zoom from './Zoom.jsx';
// import background from '../background.jpg';

const useStyles = makeStyles({
  appContainer: {
    width: '100%',
    display: 'block',
    'box-sizing': 'border-box',
  },
  aboveTheEnvelope: {
    display: 'flex',
    width: '100%',
    'max-height': '90vh',
    position: 'relative',
    left: '0px',
    padding: '50px 0',
  },
  belowTheEnvelope: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    left: '0px',
    padding: '0 0 50px 0',
  },
});



function App() {
  const [zoom, setZoom] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <Zoom zoom={zoom} setZoom={setZoom}/>
      <div className={classes.aboveTheEnvelope}>
        <SubscribeForm setZoom={setZoom}/>
        <MainView/>
      </div>
      <div className={classes.belowTheEnvelope}>
        <NewsStories />
        <ThinkerFeed />
      </div>
    </div>
  );
}

export default App;
