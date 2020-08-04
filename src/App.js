import React from 'react';
import './App.css';
import VideoContext from './contexts/videoContext.js';
import Header from './components/hub/Header.js';
import PerformerHub from './components/hub/PerformerHub.js';

function App() {
  return (
    <div className="App">
      <VideoContext.Provider>
        {/* Header */}
        <Header />
        {/* Performer Hub */}
        <PerformerHub/>
      </VideoContext.Provider>
    </div>
  );
}

export default App;
