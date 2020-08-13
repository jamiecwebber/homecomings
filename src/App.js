import React from 'react';
import './App.css';
import { VideoContextProvider } from './contexts/VideoContext.js';
import PerformerHub from './components/hub/PerformerHub.js';

function App() {
  return (
    <div className="App">
      <VideoContextProvider>
        {/* Performer Hub */}
        <PerformerHub/>
      </VideoContextProvider>
    </div>
  );
}

export default App;
