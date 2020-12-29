import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo.jsx';

const useStyles = makeStyles({
  visualsContainer: {
    'flex-grow': '1',
    display: 'flex',
    width: '100%',
  },
  title: {
    position: 'relative',
    'max-height': '20vh',
    margin: '0',
    top: '40%',
    left: '20%',
    'font-family': 'aktiv-grotesk',
    'font-weight': '400',
    'font-size': '5em',
  },

});

const MainView = function() {
  const classes = useStyles();

  return(
      <div className={classes.visualsContainer}>
        <h1 className={classes.title}>DeFi</h1>
        <Logo />
      </div>
  );
}

export default MainView;
