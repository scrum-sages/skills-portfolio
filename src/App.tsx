import './App.css';
import { Header } from './Header';
import styled from 'styled-components';
import './App.css';
import Map from './components/Map';

function App() {
  return (
    <>
      <div>
        <Header></Header>
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
