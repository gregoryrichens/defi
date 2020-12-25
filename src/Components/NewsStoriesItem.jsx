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
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 33.6px;
  text-transform: none;
  margin: 0;
`;

const Blurb = styled.p`
  font-family: "Roboto Mono";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  text-transform: none;
  margin: 0;
`;

function NewsStoriesItem({ headline, blurb }) {
  return(
    <StoryContainer>
      <NewsThumbnail />
      <NewsText>
        <Headline>{headline}</Headline>
        <Blurb>{blurb}</Blurb>
      </NewsText>
    </StoryContainer>
  );
};

export default NewsStoriesItem;