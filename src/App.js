import React from 'react';
import Header from "./components/Header";
import PictureOfADay from "./components/PictureOfADay";
import state from "./redux/store";
import {Provider} from "react-redux";
import {Router} from '@reach/router'
import Earth from "./components/Earth";
import AboutPic from "./components/aboutpic";
import Mars from "./components/Mars";
import Curiosity from "./components/RoverCuriosity";
import Opportunity from "./components/RoverOpportunity";
import Spirit from "./components/RoverSpirit";
import SearchPage from "./components/SearchPage";
function App() {
  return (
      <Provider store={state}>
      <>
      <Header/>
          <Router>
              <PictureOfADay path={"/"}/>
              <Earth path={"/earth"}/>
              <AboutPic path={"/aboutpic"} />
              <Mars path={"/mars"}/>
              <Curiosity path={"/mars/curiosity"}/>
              <Opportunity path={"/mars/opportunity"}/>
              <Spirit path={"/mars/spirit"}/>
              <SearchPage path={"/search"} />
          </Router>
      </>
      </Provider>
)
};

export default App;
