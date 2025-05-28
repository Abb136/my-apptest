import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

type Country={
    name:{common: string};
    latlng:[number,number];
};

export default function MyMap({countries}:{countries: Country[]}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA5fd4si-YA6UZzGYANDAguRsR1bKF_nDU'
  });

  if(!isLoaded) return <div>Loading...</div>;

  
  return isLoaded ? (
     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
      {countries.map((country, index) => (
        <Marker
          key={index}
          position={{ lat: country.latlng[0], lng: country.latlng[1] }}
          title={country.name.common}
        />
      ))}
    </GoogleMap>
  ) : (<></>);
};

  