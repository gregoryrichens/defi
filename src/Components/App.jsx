import MainView from './MainView.jsx';
import styled from 'styled-components';
import NewsStories from './NewsStories.jsx';
import ThinkerFeed from './ThinkerFeed.jsx';
import SubscribeForm from './SubscribeForm.jsx';
// import background from '../background.jpg';

const AppContainer = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
`;
const AboveTheEnvelope = styled.div`
  display: flex;
  width: 100%;
  max-height: 90vh;
  position: relative;
  left: 0px;
  padding: 50px 0;
`;

const BelowTheEnvelope = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  left: 0px;
  padding: 0 0 50px 0;
`;


function App() {

  return (
    <AppContainer>
      <AboveTheEnvelope>
        <SubscribeForm />
        <MainView/>
      </AboveTheEnvelope>
      <BelowTheEnvelope>
        <NewsStories />
        <ThinkerFeed />
      </BelowTheEnvelope>
    </AppContainer>
  );
}

export default App;
