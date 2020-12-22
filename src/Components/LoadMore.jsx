import React from 'react';
import styled from 'styled-components';

const MoreButton = styled.button`
  font-family: aktiv-grotesk;
  font-size: 18.72px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 26.208px;
  text-transform: none;
  margin-top: 40px;
`;

function LoadMore() {
  return(
    <MoreButton>Load More</MoreButton>
  );
};

export default LoadMore;
