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
    menuSelectionAudio.volume = 0.1;
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
                    placeholder="Enter your email address"
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
                <footer class="footer">
                  <div class="footer__logo-box text-center">
                    <img
                      src={landingPageLogo}
                      alt=" Full logo"
                      class="footer__logo"
                    />
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="footer__navigation">
                        <ul class="footer__list">
                          <li class="footer__item">
                            <a href="/" class="footer__link">
                              Home
                            </a>
                          </li>
                          <li class="footer__item">
                            <a href="/giveaways" class="footer__link">
                              Giveaways
                            </a>
                          </li>
                          <li class="footer__item">
                            <a href="/promotions" class="footer__link">
                              Promotions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <p class="footer__copyright">
                        Built with{" "}
                        <a href="" class="footer__link">
                          love
                        </a>{" "}
                        for all of the{" "}
                        <a href="#" class="footer__link">
                          Indie Games, developers, and geeks{" "}
                        </a>{" "}
                        out there. Copyright @ 2019 Loot Vault Inc.
                      </p>
                    </div>
                  </div>
                </footer>
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
                      <h2>Ready to see and play your game</h2>
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
                              <h3>Crowdfunding Experts</h3>
                              <p class="landingPage__promotions__features--box__text">
                                Combined, our team has over 50 years+ of
                                experience in Kickstarter and Indiegogo
                                Campaigns, Steam Promotion, and Email List
                                targeting.
                              </p>
                            </div>
                          </Col>
                          <Col lg="4">
                            <div class="landingPage__promotions__features--box">
                              <i class="fas fa-users landingPage__promotions__features--box__icon" />
                              <h3>Next Level Exposure</h3>
                              <p class="landingPage__promotions__features--box__text">
                                Take your exposure to the next level with our
                                team of Crowdfunding, email marketing,
                                influencer marketing, and promotional experts.
                              </p>
                            </div>
                          </Col>
                          <Col lg="4">
                            <div class="landingPage__promotions__features--box">
                              <i class="fas fa-gamepad landingPage__promotions__features--box__icon" />
                              <h3>1 Million+ Gamers</h3>
                              <p class="landingPage__promotions__features--box__text">
                                We have over 1 million gamers in our community
                                who have actively opted in to seeing our Indie
                                Game promotions. Let's get your game in front of
                                them.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="1" />
                    </Row>
                  </section>
                  <section className="section-book">
                    <div className="book">
                      <div className="book__formMain">
                        <form action="#" className="form">
                          <div className="my-bottom-medium text-center">
                            <h2>Schedule a Free Consultation</h2>
                          </div>
                          <div className="form__group">
                            <input
                              id="fullName"
                              type="text"
                              className="form__input"
                              placeholder="Full Name"
                              required
                            />
                            <label for="fullName" className="form__label">
                              Full Name
                            </label>
                          </div>
                          <div className="form__group">
                            <input
                              id="email"
                              type="email"
                              className="form__input"
                              placeholder="Email address"
                              required
                            />
                            <label for="email" className="form__label">
                              Email address
                            </label>
                          </div>
                          <div className="form-group">
                            <div className="form__radio-group">
                              <input
                                type="radio"
                                className="form__radio-input"
                                id="small"
                                name="size"
                              />
                              <label for="small" className="form__radio-label">
                                <span className="form__radio-button"> </span>{" "}
                                Crowdfunding
                              </label>
                            </div>

                            <div className="form__radio-group">
                              <input
                                type="radio"
                                className="form__radio-input"
                                id="large"
                                name="size"
                              />
                              <label for="large" className="form__radio-label">
                                <span className="form__radio-button"> </span>
                                Promotion
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <button className="appBtn appBtn--primary appBtn--animated">
                              Next Step &rarr;
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
                <footer class="footer">
                  <div class="footer__logo-box text-center">
                    <img
                      src={landingPageLogo}
                      alt=" Full logo"
                      class="footer__logo"
                    />
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="footer__navigation">
                        <ul class="footer__list">
                          <li class="footer__item">
                            <a href="/" class="footer__link">
                              Home
                            </a>
                          </li>
                          <li class="footer__item">
                            <a href="/giveaways" class="footer__link">
                              Giveaways
                            </a>
                          </li>
                          <li class="footer__item">
                            <a href="/promotions" class="footer__link">
                              Promotions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <p class="footer__copyright">
                        Built with{" "}
                        <a href="" class="footer__link">
                          love
                        </a>{" "}
                        for all of the{" "}
                        <a href="#" class="footer__link">
                          Indie Games, developers, and geeks{" "}
                        </a>{" "}
                        out there. Copyright @ 2019 Loot Vault Inc.
                      </p>
                    </div>
                  </div>
                </footer>
              </>
            )}
          />
        </div>
      </>
    );
  }
}

export default MainLandingPage;
