import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.jsx';

const Title = styled.h1`
  font-family: aktiv-grotesk;
  font-weight: 400;
  font-style: italic;
  font-size: 3em;
`

const MainView = function() {
    return(
        <div>
            <Title>DeFi</Title>
            <p className='subtitle'>the trend</p>
            <Logo />
        </div>
    );
}

export default MainView;
