/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/routes/Home";
import Thread from './components/routes/thread/Thread';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {

  const renderHome = (props: any) => <Home {...props} />;
  const renderThread = (props: any) => <Thread {...props}/>;

  return (
    <Switch>
      <Route exact path="/" render={renderHome} />
      <Route
        path="/categorythreads/:categoryId"
        render={renderHome}
      />
      <Route path="/thread/:id" render={renderThread} />
    </Switch>
  );
}

export default App;
