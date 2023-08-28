import styled from "styled-components";
import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <>
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
