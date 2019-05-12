// packages
import React from "react";

// css

 // components
import MapContainer from './Components/MapContainer';

const envKey: any = process.env.REACT_APP_MAP_KEY;

const App: React.FC = () => {
  return (
    <MapContainer/>
  );
};

export default App;
