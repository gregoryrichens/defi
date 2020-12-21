import React from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';

function SubscribeForm() {
  return (
    <form noValidate autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" />
      </FormControl>
    </form>
  );
};

export default SubscribeForm;