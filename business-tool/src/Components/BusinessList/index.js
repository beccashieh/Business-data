import React, { Component } from "react";
import business from "../../business.json";
import "./style.css";

class BusinessList extends Component {
  state = {
    business
  };

  render() {
    const businessNames = this.state.business.map((item, key) => (
      <a
        className="list-group-item list-group-item-action"
        data-toggle="list"
        href="#list-profile"
        role="tab"
        aria-controls="profile"
        key={item.id}
      >
        {item.name}
      </a>
    ));

    // const businessInfo = this.state.business.map((item, key) => (
    //   <div
    //     className="tab-pane fade"
    //     role="tabpanel"
    //     aria-labelledby="list-profile-list"
    //     key={item.id}
    //   >
    //     <li>{item.phone}</li>
    //     <li>{item.address}</li>
    //     <li>{item.status}</li>
    //     <li>{item.contacts}</li>
    //     <li>{item.financialPerformance}</li>
    //   </div>
    // ));

    return (
      <div className="row">
        <div className="col-4 businesses">
        <h3>Available businesses</h3>
          <div className="list-group" id="list-tab" role="tablist">
            <ul>{businessNames}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessList;
