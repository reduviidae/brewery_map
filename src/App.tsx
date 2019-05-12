// packages
import React from "react";

// style
import "./App.scss";

// components
import NavBar from "./Components/NavBar";
import MapContainer from "./Components/MapContainer";

const App: React.FC = () => {
  return (
    <div className="mapContainer">
      <NavBar />
      <MapContainer />
    </div>
  );
};

export default App;
