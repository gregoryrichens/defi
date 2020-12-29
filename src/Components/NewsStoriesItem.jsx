import React from 'react';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

const StoryContainer = styled.div`
  width: 100%;
`;

const NewsThumbnail = styled.img`
  width: 33%;
`;

const NewsText = styled.div`
  display: block;
`;

const Headline = styled.a`
  font-family: aktiv-grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 33.7px;
  text-transform: none;
  margin-bottom: 10px;
  text-decoration: none;
  background-color: none;
  color: #000000;
`;

const Blurb = styled.p`
  font-family: "Helvetica";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 30px;
  text-transform: none;
  margin-bottom: 20px;
  border-bottom: 1px #0000001f;
`;

function NewsStoriesItem({ headline, blurb, link }) {
  return(
    <StoryContainer>
      <NewsThumbnail />
      <NewsText>
        <Headline href={link} target='_tab'>{headline.toLowerCase()}</Headline>
        <Blurb>{blurb}</Blurb>
      </NewsText>
      <Divider />
    </StoryContainer>
  );
};

export default NewsStoriesItem;