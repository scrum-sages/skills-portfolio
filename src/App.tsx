import styled from 'styled-components';
import './App.css';
import { Header } from './components/Header';
import Map from './components/Map';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Skills></Skills>
        <MapWrapper>
          <Map />
        </MapWrapper>
      </div>
    </>
  );
}

const MapWrapper = styled.div`
  height: 20rem;
  width: 20rem;
`;

export default App;
