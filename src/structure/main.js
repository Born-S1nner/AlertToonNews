import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
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
                            like: #
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
        )
    }
}

export default Main
