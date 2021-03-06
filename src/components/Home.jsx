import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <a className="btn btn-dark btn-lg" href="/myprojects" role="button">
            Explore Projects
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
