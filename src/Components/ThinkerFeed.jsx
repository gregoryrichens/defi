import React from 'react';
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

function ThinkerFeed() {
  // useEffect(() => {
  //   const anchor = document.createElement('a');
  //   anchor.setAttribute('className', 'twitter-widget');
  //   anchor.setAttribute('chrome', 'noheader nofooter noborders noscrollbar');
  //   anchor.setAttribute('href', 'https://twitter.com/gregrichens/lists/defi-11086?ref_src=twsrc%5Etfw');
  //   document.getElementsByClassName('tweet-embed')[0].appendChild(anchor);

  //   const script = document.createElement('script');
  //   script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  //   document.getElementsByClassName('tweet-embed')[0].appendChild(script);
  // },[]);

  return (
    <Tweets className='tweet-embed'>
      <Heading>
        <SectionNumber>02</SectionNumber>
        <SectionTitle>thinkerfeed.</SectionTitle>
      </Heading>
      <Divider margin='20 0' />
      <Timeline
        dataSource={{
          sourceType: 'list',
          ownerScreenName: 'gregrichens',
          id: '1341464597925044224'
        }}
        options={{
          height: '90vh',
          chrome: 'noheader nofooter noscrollbar'
        }}
        marginBottom='10px'
      />
    </Tweets>
  );
};

export default ThinkerFeed;