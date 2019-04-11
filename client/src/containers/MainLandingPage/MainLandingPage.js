import React, { Component } from "react";
import "./MainLandingPage.scss";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import landingPageLogo from "../../assets/img/landingPageLogo.png";
import giveawayImage1 from "../../assets/img/giveawayImage1.jpg";
import giveawayImage2 from "../../assets/img/giveawayImage2.jpg";
import giveawayImage3 from "../../assets/img/giveawayImage3.jpg";
import MenuSelection from "../../assets/audio/menuSelection.mp3";
import MenuClicked from "../../assets/audio/menuClicked.mp3";

var MenuClickedAudio = new Audio(MenuClicked);
var menuSelectionAudio = new Audio(MenuSelection);

Container.propTypes = {
  fluid: true
  // applies .container-fluid class
};

class MainLandingPage extends Component {
  state = {
    email: ""
  };

  playAudioHover = () => {
    menuSelectionAudio.volume = 0.6;
    menuSelectionAudio.play();
  };
  playAudioClicked = () => {
    MenuClickedAudio.volume = 0.2;
    MenuClickedAudio.play();
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
      const createUderEmail = await fetch(
        process.env.REACT_APP_BACKEND + `user/newUserEmail`,
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
      <>
        <div className="landingPage">
          <div className="landingPage__navContainer">
            <Link
              className="landingPage__navContainer--buttons"
              to={{
                pathname: "/giveaways"
              }}
            >
              Giveaways
            </Link>

            <Link
              className="landingPage__navContainer--buttons"
              to={{
                pathname: "/promotions"
              }}
            >
              Promotions
            </Link>
          </div>

          <div className="landingPage__logo">
            <Link
              to={{
                pathname: "/"
              }}
            >
              <img src={landingPageLogo} />
            </Link>
          </div>
          <Route
            path="/"
            exact
            render={() => (
              <div className="landingPage__content">
                <h1>Loot &#9830; Vault</h1>
                <p>
                  Your geeky, awesome friend that sends you an email each week
                  with all the Indie Gaming news you would want to know.
                </p>
                <form onSubmit={this.submitHandler}>
                  <h4>sign up today and beam aboard our growing space ship</h4>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleInputChange}
                    value="Enter your email address"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="landingPage__content--submit"
                  />
                </form>
              </div>
            )}
          />

          <Route
            path="/giveaways"
            exact
            render={() => (
              <>
                <Row className="landingPage__giveawayContainer">
                  <Col sm="4">
                    <div className="landingPage__giveawayContainer--card">
                      <div className="landingPage__giveawayContainer--card--image">
                        <img
                          src={giveawayImage1}
                          alt="venue image"
                          className="image-responsive"
                          onMouseOver={() => {
                            this.playAudioHover();
                          }}
                          onClick={() => {
                            this.playAudioClicked();
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="landingPage__giveawayContainer--card">
                      <div className="landingPage__giveawayContainer--card--image">
                        <img
                          src={giveawayImage1}
                          alt="venue image"
                          className="image-responsive"
                          onMouseOver={() => {
                            this.playAudioHover();
                          }}
                          onClick={() => {
                            this.playAudioClicked();
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="landingPage__giveawayContainer--card">
                      <div className="landingPage__giveawayContainer--card--image">
                        <img
                          src={giveawayImage3}
                          alt="venue image"
                          className="image-responsive"
                          onMouseOver={() => {
                            this.playAudioHover();
                          }}
                          onClick={() => {
                            this.playAudioClicked();
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="landingPage__giveawayContainer--card">
                      <div className="landingPage__giveawayContainer--card--image">
                        <img
                          src={giveawayImage1}
                          alt="venue image"
                          className="image-responsive"
                          onMouseOver={() => {
                            this.playAudioHover();
                          }}
                          onClick={() => {
                            this.playAudioClicked();
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="landingPage__giveawayContainer--card">
                      <div className="landingPage__giveawayContainer--card--image">
                        <img
                          src={giveawayImage1}
                          alt="venue image"
                          className="image-responsive"
                          onMouseOver={() => {
                            this.playAudioHover();
                          }}
                          onClick={() => {
                            this.playAudioClicked();
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="landingPage__giveawayContainer--card">
                      <div className="landingPage__giveawayContainer--card--image">
                        <img
                          src={giveawayImage3}
                          alt="venue image"
                          className="image-responsive"
                          onMouseOver={() => {
                            this.playAudioHover();
                          }}
                          onClick={() => {
                            this.playAudioClicked();
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <footer className="text-center">Copyright@ 2019</footer>
              </>
            )}
          />
          <Route
            path="/promotions"
            exact
            render={() => (
              <>
                <div className="landingPage__promotions">
                  <div className="landingPage__promotions__header">
                    <div class="landingPage__promotions__header--text-box">
                      <h1>Over 1 Million Indie Gamers</h1>
                      <h2>
                        Kickstarter, Steam, Indiegogo, Email List, and more
                      </h2>
                    </div>
                  </div>

                  <section class="landingPage__promotions__features">
                    <Row>
                      <Col lg="1" />
                      <Col lg="10">
                        <Row>
                          <Col lg="4">
                            <div class="landingPage__promotions__features--box">
                              <i class="fas fa-funnel-dollar landingPage__promotions__features--box__icon" />
                              <h3>Kickstarter</h3>
                              <p class="landingPage__promotions__features--box__text">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolor mdistinctio laudantium
                                nostrum dolores dolorem debitis?
                              </p>
                            </div>
                          </Col>
                          <Col lg="4">
                            <div class="landingPage__promotions__features--box">
                              <i class="fas fa-users landingPage__promotions__features--box__icon" />
                              <h3>Expose Your Game</h3>
                              <p class="landingPage__promotions__features--box__text">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolor mdistinctio laudantium
                                nostrum dolores dolorem debitis?
                              </p>
                            </div>
                          </Col>
                          <Col lg="4">
                            <div class="landingPage__promotions__features--box">
                              <i class="fas fa-gamepad landingPage__promotions__features--box__icon" />
                              <h3>1 Million Gamers</h3>
                              <p class="landingPage__promotions__features--box__text">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolor mdistinctio laudantium
                                nostrum dolores dolorem debitis?
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="1" />
                    </Row>
                  </section>
                </div>
                <footer className="text-center">Copyright@ 2019</footer>
              </>
            )}
          />
        </div>
      </>
    );
  }
}

export default MainLandingPage;
