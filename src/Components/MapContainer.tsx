// packages
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";




const envKey: any = process.env.REACT_APP_MAP_KEY;


const MapContainer: React.FC = (props: any) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: 40.64642,
        lng: -73.95999
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: envKey
})(MapContainer);
