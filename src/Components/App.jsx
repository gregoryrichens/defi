import '../App.css';
import MainView from './MainView.jsx';
import styled from 'styled-components';
import NewsStories from './NewsStories.jsx';
import ThinkerFeed from './ThinkerFeed.jsx';
import SubscribeForm from './SubscribeForm.jsx';

const AppContainer = styled.div`
  width: 100%;
`;
const AboveTheEnvelope = styled.div`
  display: flex;
  width: 100%;
`;

const BelowTheEnvelope = styled.div`
  display: flex;
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
