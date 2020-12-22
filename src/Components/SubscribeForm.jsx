import React from 'react';
import styled from 'styled-components';
import { FormControl, Input, InputLabel, IconButton } from '@material-ui/core';
import MarkunreadMailboxRounded from '@material-ui/icons/MarkunreadMailboxRounded';

const FormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  margin: 0 0 0 15%;
`;

const Form = styled.form`
  position: relative;
  max-height: 10vh;
  width: 100%;
`;

const FormHeadline = styled.h1`
  font-family: aktiv-grotesk;
`;

const NewsletterDescription = styled.p`
  font-family: 'Roboto Mono';
`;

const NewsletterTerms = styled.p`
  font-family: 'Roboto Mono';
`;

function SubscribeForm() {
  return (
    <FormContainer>
      <FormHeadline>top stories. top minds. <br/> no frills.</FormHeadline>
      <NewsletterDescription> like our content? sign up for our weekly newsletter</NewsletterDescription>
      <Form noValidate autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="component-simple">Email Address</InputLabel>
          <Input id="component-simple" />
          <IconButton type='submit'>
            <MarkunreadMailboxRounded/>
          </IconButton>
        </FormControl>
      </Form>
      <NewsletterTerms>i agree to receive weekly digest emails re: the most important Crypto/DeFi trends</NewsletterTerms>
    </FormContainer>
  );
};

export default SubscribeForm;