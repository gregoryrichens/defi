import React from 'react';
import styled from 'styled-components';
import NewsStoriesItem from './NewsStoriesItem.jsx';
import { Divider } from '@material-ui/core';

const Stories = styled.div`
  display: block;
  position: relative;
  margin-left: 10%;
  flex-grow: 1;
  width: 33%;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionTitle = styled.div`
  align-self: flex-end;
  font-family: aktiv-grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 33.6px;
  text-transform: none;
  margin-left: auto;
`;

const SectionNumber = styled.div`
  align-self: flex-start;
  font-family: "Roboto Mono";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 56px;
  text-transform: none;
`;

function NewsStories() {
  return (
    <Stories>
      <Heading>
        <SectionNumber>01</SectionNumber>
        <SectionTitle>news.</SectionTitle>
      </Heading>
      <Divider />
      <NewsStoriesItem />
      <NewsStoriesItem />
      <NewsStoriesItem />
    </Stories>
  );
};

export default NewsStories;
export {
  Heading,
  SectionTitle,
  SectionNumber,
};