import styled from 'styled-components';
import './App.css';
import Map from './components/Map';
import Team from './components/Team';

function App() {
  return (
    <>
      <Team />
      <MapWrapper>
        <Map />
      </MapWrapper>
    </>
  );
}

const MapWrapper = styled.div`
  height: 20rem;
  width: 20rem;
`;

export default App;
