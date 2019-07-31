import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import BusinessList from "../BusinessList";
import NavBar from "../NavBar";
import AddBusiness from "../Modals/Add";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Jumbotron />
          <AddBusiness />
          <BusinessList />
        </div>
      </div>
    );
  }
}

export default HomePage;
