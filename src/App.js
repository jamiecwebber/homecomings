import React from 'react';
import './App.css';
// import { VideoContextProvider } from './contexts/VideoContext.js';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";

// import PerformerHub from './components/pages/PerformerHub.js';
import MainPage from './components/pages/MainPage.js';
import LivePage from './components/pages/LivePage.js';
import AboutPage from './components/pages/AboutPage.js';
import WelcomePage from './components/pages/WelcomePage.js';

function App() {
  return (
    <div className="App">
      {/* <VideoContextProvider> */}
        <Router>
          <Switch>
            <Route path="/main">
              <MainPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/live">
              <LivePage />
            </Route>
            {/* <Route path="/performers">
              <PerformerHub />
            </Route> */}
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
      {/* </VideoContextProvider> */}
    </div>
  );
}

export default App;
