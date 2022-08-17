import React from 'react';
import MyMap from './components/MyMap.js';
import Banner from './components/Banner.js'
import InfoBar from './components/InfoBar.js'

function App() {
  return (
    <div className="App">
      <Banner />
      <InfoBar />
      <MyMap />
    </div>
  )
}

export default App;