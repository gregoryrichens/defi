import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';
import { Heading, SectionTitle, SectionNumber } from './NewsStories.jsx';
import { Timeline } from 'react-twitter-widgets';

const Tweets = styled.div`
  display: block;
  flex-grow: 2;
  width: 66%;
  margin: 0 5% 0 40px;
`;

const Spacer = styled.div`
  height: 20px;
`;

function ThinkerFeed() {

  return (
    <Tweets className='tweet-embed'>
      <Heading>
        <SectionNumber>02</SectionNumber>
        <SectionTitle>thinkerfeed.</SectionTitle>
      </Heading>
      <Divider />
      <Spacer/>
      <Timeline
        dataSource={{
          sourceType: 'list',
          ownerScreenName: 'gregrichens',
          id: '1341464597925044224'
        }}
        options={{
          height: '90vh',
          width: '75%',
          chrome: 'noheader nofooter noscrollbar noborder'
        }}
        marginBottom='10px'
      />
    </Tweets>
  );
};

export default ThinkerFeed;