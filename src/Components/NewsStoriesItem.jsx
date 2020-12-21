import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  border: 1px #000000;
  width: 100%;
`;

const NewsThumbnail = styled.img`
  width: 33%;
`;

const NewsText = styled.div`
  display: block;
`;

const Headline = styled.h3`
  font-family: aktiv-grotesk;
  font-size: 2em;
  font-weight: 700;
`;

const Blurb = styled.p`
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 1em;
`;

function NewsStoriesItem() {
  return(
    <StoryContainer>
      <NewsThumbnail />
      <NewsText>
        <Headline>Headline Text</Headline>
        <Blurb>Blah Blah Blah Blah blah blah</Blurb>
      </NewsText>
    </StoryContainer>
  );
};

export default NewsStoriesItem;