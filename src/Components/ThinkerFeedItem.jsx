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
  font-size: 2em;
  font-weight: 700;
`;

const Tweet = styled.p`
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 1em;
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