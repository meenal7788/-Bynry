import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

export const MapComponent = ({ address }) => {
  const mapCenter = {
    lat: address.lat, 
    lng: address.lng,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

