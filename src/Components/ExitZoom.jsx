import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    color: 'white',
  }
});

function ExitZoom({ zoom, setZoom }) {
  const toggleZoom = () => {
    setZoom(!zoom);
  };
  const classes = useStyles();

  return (
    <IconButton onClick={() => toggleZoom()}>
      <CloseIcon className={classes.icon} />
    </IconButton>
  );
};

export default ExitZoom;