import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './structure/header';
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
          <div className="guard">
            <h3>Current News</h3>
            <article className="articleStyle">
              <section>
                <h4>News site for Webtoon</h4>
                <h5>1/22/2020</h5>
                <p>
                  An individual who goes by the name "BornS1nner" deciedes to make an news app for every Webtoon fans.
                </p>
              </section>
            </article>
            <article className="articleStyle">
              <section>
                <h4>Webtoon is 6 years old</h4>
                <p>
                  Bless on those that work with Webtoon for 6 years. Happy Birthday Webtoon!
                </p>
              </section>
            </article>
            <article className="articleStyle">
              <section>
                <h4>CANVAS Day!!!</h4>
                <h5>8/13/2020</h5>
                <p>
                  Look forward to the CANVAS day to see the 20 series that are hand-picked for this occasion!
                </p>
              </section>
            </article>
          </div>
          <footer className="footer">
            <div className="parag">
              <p>All news and media material are reserved.</p>
              <p>Copyright &copy 2020, World Destiny.</p>
            </div>
          </footer>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
