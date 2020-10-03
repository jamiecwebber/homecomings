import React, { useState } from 'react';
import './App.css';
import { AudioContextProvider } from './contexts/AudioContext.js';
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

import AnsweringMachine from './components/pages/AnsweringMachine.js';
import Radio from './components/pages/Radio.js';
import TVPopup from './components/pages/TVPopup.js';

import UnderConstructionPopup from './components/pages/UnderConstructionPopup.js'


import Background from './components/atoms/Background'
import blueWavesBackground from './media/bluewaves.gif'
import ariePicture from './media/arieviola.png'

function App() {
  const [ permissionGranted, setPermissionGranted ] = useState(false);


  return (
    <div className="App">
      <AudioContextProvider>
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
            <Route path="/answeringmachine">
              <AnsweringMachine />
            </Route>
            <Route path="/radio">
              <Radio />
            </Route>
            <Route path="/tvpopup">
              <TVPopup />
            </Route>
            <Route path="/underconstruction">
              <UnderConstructionPopup />
            </Route>
            {/* <Route path="/performers">
              <PerformerHub />
            </Route> */}
            <Route path="/arieimage">
              <Background img={blueWavesBackground}>Arie Picture!<img src={ariePicture} alt='arie!!'></img></Background>
            </Route>
            <Route path="/">
              <WelcomePage permissionGranted={permissionGranted} setPermissionGranted={setPermissionGranted}/>
            </Route>
          </Switch>
        </Router>
      </AudioContextProvider>
    </div>
  );
}

export default App;
