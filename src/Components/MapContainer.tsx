// packages
import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const envKey: string = process.env.REACT_APP_MAP_KEY as string;

const style: any = {
  height: '20%',
  width: '20%'
}

const MapContainer: React.FC = (props: any) => {
  return (
    <Map
      google={props.google}
      style={style}
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
