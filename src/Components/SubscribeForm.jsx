import React from 'react';
import { FormControl, Input, InputLabel, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

function SubscribeForm() {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.formHeadline}>top stories. top minds. <br/> no frills.</h1>
      <p className={classes.newsletterDescription}> like our content? sign up for our weekly newsletter</p>
      <form className={classes.form} noValidate autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Email Address</InputLabel>
          <Input id="component-simple" />
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