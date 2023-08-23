import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Map() {
  return (
    <Wrapper apiKey={"AIzaSyB7eE24L0wyl9bHA4MF8HDG_EllOkLyMmA"}>
      <MapContainer />
    </Wrapper>
  );
}

function MapContainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new google.maps.Map(ref.current as HTMLElement, {
      center: { lat: 0, lng: 0 },
      zoom: 10,
    });
  }, []);

  return <MapInner ref={ref} id="map" />;
}

const MapInner = styled.div`
  height: 100vh;
  width: 100vw;
`;
