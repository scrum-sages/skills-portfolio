import styled from "styled-components";
import "./App.css";
import Map from "./components/Map";
import Skills from "./Skills";

function App() {
  return (
    <>
    <Skills />
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
