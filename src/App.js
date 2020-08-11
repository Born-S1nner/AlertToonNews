import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './structure/header';
import About from './structure/panel/about'
import Event from './structure/panel/event'
import Series from "./structure/panel/series";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      updates: false
    };

    this.go= this.go.bind(this)
  }

  go () {
    this.setState ( prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
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
                <h4>New app for Webtoon</h4>
                <p>
                  An individual who goes by the name "BornS1nner" deciedes to make an news app for every Webtoon fans.
                </p>
              </section>
              <div className="list">
                <button onClick={this.go}>Like: {this.state.count}</button>
              </div>
            </article>
            <article className="articleStyle">
              <section>
                <h4>Webtoon is 6 years old</h4>
                <p>
                  Bless on those that work with Webtoon for 6 years. Happy Birthday Webtoon!
                </p>
              </section>
              <div className="list">
                like: #
              </div>
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
