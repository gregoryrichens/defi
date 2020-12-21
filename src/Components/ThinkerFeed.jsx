import React from 'react';
import styled from 'styled-components';
import ThinkerFeedItem from './ThinkerFeedItem.jsx';
import LoadMore from './LoadMore.jsx';

const Tweets = styled.div`
  display: block;
  width: 66%;
`;

function ThinkerFeed() {
  return (
    <Tweets>
      <ThinkerFeedItem />
      <ThinkerFeedItem />
      <ThinkerFeedItem />
      <LoadMore>Load More</LoadMore>
    </Tweets>
  );
};

export default ThinkerFeed;