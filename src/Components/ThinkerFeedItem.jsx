import React from 'react';
import styled from 'styled-components';

const TweetContainer = styled.div`
  border: 1px #000000;
  width: 100%;
`;

const ProfileThumbnail = styled.img`
  width: 16%;
`;

const TweetText = styled.div`
  display: block;
  width: 84%
`;

const Username = styled.p`
  font-family: aktiv-grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 33.6px;
  text-transform: none;
  margin: 0;
`;

const Tweet = styled.p`
  font-family: "Roboto Mono";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  text-transform: none;
  margin: 0;
`;

function ThinkerFeedItem() {
  return(
    <TweetContainer>
      <ProfileThumbnail />
      <TweetText>
        <Username>Username</Username>
        <Tweet>tweet tweet tweet tweet tweet</Tweet>
      </TweetText>
    </TweetContainer>
  );
};

export default ThinkerFeedItem;