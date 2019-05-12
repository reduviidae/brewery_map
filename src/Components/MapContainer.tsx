// packages
import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

require('dotenv').config()

const envKey: string = process.env.REACT_APP_MAP_KEY as string;

const MapContainer: React.FC = (props: any) => {
  return (
    <Map
      google={props.google}
      zoom={16}
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
