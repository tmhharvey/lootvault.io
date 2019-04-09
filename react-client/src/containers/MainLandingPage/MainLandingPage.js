import React, { Component } from "react";
import "./MainLandingPage.scss";

import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import landingPageLogo from "../../assets/img/landingPageLogo.png";
Container.propTypes = {
  fluid: true
  // applies .container-fluid class
};

class MainLandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="landingPage">
        <div className="landingPage__logo">
          <img src={landingPageLogo} />
        </div>
        <div className="landingPage__content">
          <h1>Loot &#9830; Vault</h1>
          <p>
            Your geeky, awesome friend that sends you an email each week with
            all the Indie Gaming news you would want to know.
          </p>
          <form>
            <h4>sign up today and climb aboard our growing pirate ship</h4>
            <input
              type="text"
              name="emailAddress"
              value="Enter Your Email Address"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MainLandingPage;
