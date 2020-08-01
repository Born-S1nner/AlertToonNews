import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './structure/header';
import Main from './structure/main';
import About from './structure/panel/about'
import Event from './structure/panel/event'
import Series from "./structure/panel/series";

class App extends React.Component {
  render() {
    console.log(process.env.PUBLIC_URL + "/")
    return (
      <Router>
        <React.Fragment>
          <Header exact path="/" />
          <Route exact path="/about" component={About} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/series" component={Series} />
          <Main />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
