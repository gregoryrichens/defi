import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExitZoom from './ExitZoom.jsx';
import Divider from '@material-ui/core/Divider';
import bitcoin from 'cryptocurrency-icons/svg/white/btc.svg';
import ethereum from 'cryptocurrency-icons/svg/white/eth.svg';
import litecoin from 'cryptocurrency-icons/svg/white/ltc.svg';
import tether from 'cryptocurrency-icons/svg/white/usdt.svg';

const useStyles = makeStyles({
  hideZoom: {
    display: 'none',
    position: 'fixed',
    left: '0',
    top: '0',
    bottom: '0',
    right: '0',
    'z-index': '500',
  },
  showZoom: {
    display: 'block',
    'justify-content': 'center',
    'align-content': 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    bottom: '0',
    right: '0',
    'z-index': '500',
    'background-color': '#000000',
  },
  exitZoom: {
    position: 'absolute',
    top: '30px',
    right: '20px',
  },
  heading: {
    display: 'flex',
    'flex-direction': 'row',
    'margin-top': '10%',
  },
  text: {
    'font-family': '"Roboto Mono"',
    'text-align': 'center',
    width: '30em',
    'margin-left': 'auto',
    'margin-right': 'auto',
    color: '#FFFFFF',
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
    'margin-right': 'auto',
    'margin-left': '5px',
    color: '#FFFFFF',
  },
  divider: {
    color: 'white',
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
    'margin-left': 'auto',
    'margin-right': '5px',
    color: '#FFFFFF',
  },
  imageContainer: {
    display: 'flex',
    'justify-content': 'center',
  },
  icon: {
    margin: '0 20px',
    height: '40px',
    width: '40px',
  },
});

function Zoom({ zoom, setZoom }) {
  const classes = useStyles();

  return (
    <div className={ zoom ? classes.showZoom : classes.hideZoom}>
      <ExitZoom className={classes.exitZoom} zoom={zoom} setZoom={setZoom}/>
      <div className={classes.heading}>
        <div className={classes.sectionNumber}>00</div>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <div className={classes.sectionTitle}>thank you for subscribing.</div>
      </div>
      <p className={classes.text}>We are still in the process of building content. Once our weekly newsletter starts, you'll be the first to know!</p>
      <div className={classes.imageContainer}>
        <img className={classes.icon} src={bitcoin} alt='bitcoin'/>
        <img className={classes.icon} src={ethereum} alt='ethereum'/>
        <img className={classes.icon} src={litecoin} alt='litecoin'/>
        <img className={classes.icon} src={tether} alt='tether'/>
      </div>
    </div>
  );
};

export default Zoom;