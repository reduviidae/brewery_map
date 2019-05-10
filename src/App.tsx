// packages
import React from 'react';
import GoogleMapReact from 'google-map-react';

// css
import './App.css';

// components
// import Map from './Components/Map';

const envKey: string = (process.env.REACT_APP_MAP_KEY as string)

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: envKey }}
          defaultCenter={{lat: 59.95,
      lng: 30.33}}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
  );
}

export default App;
