import React from 'react';
import './App.css';
import { VideoContextProvider } from './contexts/VideoContext.js';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";

import PerformerHub from './components/pages/PerformerHub.js';
import MainPage from './components/pages/MainPage.js';
import LivePage from './components/pages/LivePage.js';
import AboutPage from './components/pages/AboutPage.js';
import WelcomePage from './components/pages/WelcomePage.js';

function App() {
  return (
    <div className="App">
      <VideoContextProvider>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/main">Main</Link>
              </li>
              <li>
                <Link to="/live">Live</Link>
              </li>
              <li>
                <Link to="/performers">Performers</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
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
            <Route path="/performers">
              <PerformerHub />
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
      </VideoContextProvider>
    </div>
  );
}

export default App;
