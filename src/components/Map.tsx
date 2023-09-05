import { Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Map() {
  return (
    <Wrapper apiKey={import.meta.env.VITE_API_KEY}>
      <MapContainer />
    </Wrapper>
  );
}

function MapContainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new google.maps.Map(ref.current as HTMLElement, {
      center: { lat: 57.710467953735744, lng: 11.994911438107 },
      zoom: 15,
    });

    new google.maps.Marker({
      map: map,
      position: { lat: 57.710467953735744, lng: 11.994911438107 },
      title: 'Medieinstitutet, Göteborg',
    });
  }, []);

  return <MapInner ref={ref} id='map' />;
}

const MapInner = styled.div`
  height: 100%;
  width: 100%;
`;
