import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Map() {
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <MapLoading />;
      case Status.FAILURE:
        return <MapErrorComponent />;
      case Status.SUCCESS:
        return <MapContainer />;
    }
  };

  return <Wrapper apiKey={import.meta.env.VITE_API_KEY} libraries={['places']} render={render} />;
}

function MapContainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new google.maps.Map(ref.current as HTMLElement, {
      mapId: 'ee792371519b7a81',
      center: { lat: 57.710467953735744, lng: 11.994911438107 },
      zoom: 15,
    });

    const request = {
      placeId: 'ChIJPe7L6Q3zT0YR9m2RYyuQP7s',
      fields: ['name', 'formatted_address', 'geometry'],
    };

    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });

        google.maps.event.addListener(marker, 'click', () => {
          const content = document.createElement('div');

          const nameElement = document.createElement('h2');

          nameElement.textContent = place.name!;
          content.appendChild(nameElement);

          const placeIdElement = document.createElement('p');

          placeIdElement.textContent = place.place_id!;
          content.appendChild(placeIdElement);

          const placeAddressElement = document.createElement('p');

          placeAddressElement.textContent = place.formatted_address!;
          content.appendChild(placeAddressElement);

          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      }
    });
  }, []);

  return <MapInner ref={ref} id='map' />;
}

const MapInner = styled.div`
  height: 100%;
  width: 100%;
`;

function MapLoading() {
  return <MapCaption>Loading...</MapCaption>;
}

function MapErrorComponent() {
  return <MapCaption>Error loading map.</MapCaption>;
}

const MapCaption = styled.h2`
  color: #f0eee8;
`;
