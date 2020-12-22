import React from 'react';
import styled from 'styled-components';
import ThinkerFeedItem from './ThinkerFeedItem.jsx';
import LoadMore from './LoadMore.jsx';
import { Divider } from '@material-ui/core';
import { Heading, SectionTitle, SectionNumber } from './NewsStories.jsx';

const Tweets = styled.div`
  display: block;
  flex-grow: 2;
  width: 66%;
  margin: 0 5% 0 40px;
`;

function ThinkerFeed() {
  return (
    <Tweets>
      <Heading>
        <SectionNumber>02</SectionNumber>
        <SectionTitle>thinkerfeed.</SectionTitle>
      </Heading>
      <Divider />
      <ThinkerFeedItem />
      <ThinkerFeedItem />
      <ThinkerFeedItem />
      <LoadMore>Load More</LoadMore>
    </Tweets>
  );
};

export default ThinkerFeed;