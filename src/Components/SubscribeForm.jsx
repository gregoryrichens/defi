import React, { useState } from 'react';
import { FormControl, Input, InputLabel, IconButton } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import bitcoin from 'cryptocurrency-icons/svg/black/btc.svg';

const useStyles = makeStyles({
  formContainer: {
    'flex-grow': '1',
    display: 'flex',
    'flex-direction': 'column',
    'align-content': 'center',
    'justify-content': 'center',
    width: '100%',
    margin: '0 0 0 15%',
  },
  form: {
    position: 'relative',
    'max-height': '10vh',
    width: '100%',
  },
  formControl: {
    display: 'flex',
    'flex-direction': 'row',
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
  },
  input: {
    'flex-grow': '5',
  },
  iconButton: {
    'flex-grow': '1',
    'margin-left': '10px',
  },
  formHeadline: {
    'font-family': 'aktiv-grotesk',
  },
  newsletterDescription: {
    'font-family': '"Roboto Mono"',
  },
  newsletterTerms: {
    'font-family': '"Roboto Mono"',
  }
});

function SubscribeForm({ setZoom }) {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    // create a record
    console.log(e.target[0].value);
    axios.post('/api/email', {
      email: e.target[0].value,
      contact: true,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setText('');
    setZoom(true);
  }

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.formHeadline}>top stories. top minds. <br/> no frills.</h1>
      <p className={classes.newsletterDescription}> like our content? sign up for our weekly newsletter</p>
      <form className={classes.form} autoComplete="off" onSubmit={(e) => handleClick(e)}>
        <FormControl className={classes.formControl} color='grey'>
          <InputLabel htmlFor="component-simple">Email Address</InputLabel>
          <Input type="email" id="component-simple" value={text} onChange={(e) => {setText(e.target.value)}}/>
          <IconButton type='submit'>
            <img src={bitcoin} alt='bitcoin svg'/>
          </IconButton>
        </FormControl>
      </form>
      <p className={classes.newsletterTerms}>i agree to receive weekly digest emails re: the most important Crypto/DeFi trends</p>
    </div>
  );
};

export default SubscribeForm;