import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/routes/Home";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderHome = (props: any) => <Home {...props} />;

  return (
    <Switch>
      <Route exact path="/" render={renderHome} />
      <Route
        path="/categorythreads/:categoryId"
        render={renderHome}
      />
    </Switch>
  );
}

export default App;
