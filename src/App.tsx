import styled from 'styled-components';
import './App.css';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Map from './components/Map';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Hero />
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
