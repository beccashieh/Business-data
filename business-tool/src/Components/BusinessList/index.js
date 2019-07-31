import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import business from "../businessInfo.json";
import "./style.css";

class BusinessList extends Component {
  state = {
    business
  };

  render() {
    const businessInfo = this.state.business.map((item, key) => (
      <div>
        <tr>
          <td
            className="list-group-item"
            aria-controls="business-name"
            rowKey="Id"
            key={item.key}
          >
            {item.name}
          </td>
          <td
            className="list-group-item"
            aria-controls="business-phone"
            rowKey="Id"
            key={item.key}
          >
            {item.phone}
          </td>
          <td
            className="list-group-item"
            aria-controls="business-address"
            rowKey="Id"
            key={item.key}
          >
            {item.address}
          </td>
          <td
            className="list-group-item"
            aria-controls="business-status"
            rowKey="Id"
            key={item.key}
          >
            {item.status}
          </td>
          <td
            className="list-group-item"
            aria-controls="business-name"
            rowKey="Id"
            key={item.key}
          >
            {item.contact}
          </td>
          <td
            className="list-group-item"
            aria-controls="business-performance"
            rowKey="Id"
            key={item.id}
          >
            {item.financialPerformance}
          </td>
        </tr>
      </div>
    ));

    // const businessPhone = this.state.business.map((item, key) => (
    //   <td
    //     className="list-group-item"
    //     aria-controls="business-phone"
    //     key={item.key}
    //   >
    //     {item.phone}
    //   </td>
    // ));

    // const businessAddress = this.state.business.map((item, key) => (
    //   <td
    //     className="list-group-item"
    //     aria-controls="business-address"
    //     key={item.key}
    //   >
    //     {item.address}
    //   </td>
    // ));

    // const businessStatus = this.state.business.map((item, key) => (
    //   <td
    //     className="list-group-item"
    //     aria-controls="business-status"
    //     key={item.key}
    //   >
    //     {item.status}
    //   </td>
    // ));

    // const businessContact = this.state.business.map((item, key) => (
    //   <td
    //     className="list-group-item"
    //     aria-controls="business-name"
    //     key={item.key}
    //   >
    //     {item.contact}
    //   </td>
    // ));

    // const financialPerformance = this.state.business.map((item, key) => (
    //   <td
    //     className="list-group-item"
    //     aria-controls="business-performance"
    //     key={item.id}
    //   >
    //     {item.financialPerformance}
    //   </td>
    // ));

    return (
      <div className="row">
        <div className="businesses text-center">
          <h3>Available businesses</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Business Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Status</th>
                <th>Contact</th>
                <th>Financial Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>{businessInfo}</tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default BusinessList;
