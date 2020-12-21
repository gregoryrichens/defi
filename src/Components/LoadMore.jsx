import React from 'react';
import styled from 'styled-components';

const MoreButton = styled.button`
  font-family: aktiv-grotesk;
  font-weight: 400;
  font-size: 3em;
`;

function LoadMore() {
  return(
    <MoreButton>Load More</MoreButton>
  );
};

export default LoadMore;
