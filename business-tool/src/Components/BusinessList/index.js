import React, { Component } from "react";
import business from "../businessInfo.json";
import "./style.css";

class BusinessList extends Component {
  state = {
    business
  };

  render() {
    const businessNames = this.state.business.map((item, key) => (
      <button
        className="list-group-item"
        aria-controls="business-name"
        key={item.id}
      >
        {item.name}
      </button>
    ));

    return (
      <div className="row">
        <div className="col-4 businesses text-center">
        <h3>Available businesses</h3>
          <div className="list-group">
            <ul>{businessNames}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessList;
