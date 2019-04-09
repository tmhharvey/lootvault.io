import React, { Component } from "react";
import "./App.scss";
import Layout from "./Layout/Layout.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import MainLandingPage from "./MainLandingPage/MainLandingPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <MainLandingPage />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
