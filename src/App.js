import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './structure/header';
import Main from './structure/main';
import About from './structure/panel/about'
import Event from './structure/panel/event'
import Series from "./structure/panel/series";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header exact path="/" />
          <Route path="/about" component={About} />
          <Route path="/event" component={Event} />
          <Route path="/series" component={Series} />
          <Main />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
