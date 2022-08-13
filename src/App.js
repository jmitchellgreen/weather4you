import React from 'react';
import Map from './components/MyMap.js';
import Banner from './components/Banner.js'
import './App.css';
import 'maplibre-gl/dist/maplibre-gl.css';


function App() {
  return (
    <div className="App">
      <Banner />
      <Map />
    </div>
  )
}

export default App;