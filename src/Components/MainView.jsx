import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.jsx';

const VisualsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
`;

const Title = styled.h1`
  position: relative;
  max-height: 20vh;
  margin: 0;
  top: 40%;
  left: 20%;
  font-family: aktiv-grotesk;
  font-weight: 400;
  font-size: 5em;
`

const MainView = function() {
    return(
        <VisualsContainer>
          <Title>DeFi</Title>
          <Logo />
        </VisualsContainer>
    );
}

export default MainView;
