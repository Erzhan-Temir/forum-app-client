import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import LeftMenu from './components/LeftMenu';
import Main from './components/Main';
import Nav from './components/Nav';
import RightMenu from './components/RightMenu';
import SideBar from './components/SideBar';

const mainApp = () => {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  )
};

function App() {
  return (
    <Switch>
      <Route exact path="/" render={mainApp} />
    </Switch>
  );
}

export default App;
