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
  state = {
    email: ""
  };

  handleInputChange = event => {
    const target = event.currentTarget;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      () => {
        // console.log("state is now:" + JSON.stringify(this.state));
      }
    );
  };

  submitHandler = async e => {
    e.preventDefault();

    // API request
    const request = {
      email: this.state.email
    };
    console.log(request);

    try {
      const submitDemo = await fetch(
        `https://sheltered-shore-66853.herokuapp.com/user/newUserEmail`,
        {
          method: "PUT",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

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
          <form onSubmit={this.submitHandler}>
            <h4>sign up today and beam aboard our growing space ship</h4>
            <input
              type="text"
              name="email"
              onChange={this.handleInputChange}
              className="demoSurvey__titleInput"
            />
            <input
              type="submit"
              value="Submit"
              className="demoSurvey__button"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MainLandingPage;
