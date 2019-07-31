import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import BusinessList from "../BusinessList";
import NavBar from "../NavBar";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Jumbotron />
          <BusinessList />
        </div>
      </div>
    );
  }
}

export default HomePage;
