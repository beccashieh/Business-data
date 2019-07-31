import React, { Component } from "react";
import "./style.css";
import AddBusiness from "../Modals/Add";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      viewClicked: false,
      editClicked: false,
      addClicked: false,
      removeClicked: false,
      businessName: "",
      businessPhone: "",
      address: "",
      status: "",
      contact: "",
      financialPerformance: ""
    };
  }

  handleView() {
    this.setState({ viewClicked: true });
    console.log("view businesses");
  }

  handleEdit() {
    this.setState({ editClicked: true });
    console.log("edit businesses");
  }

  handleAdd() {
    this.setState({ addClicked: true });
    console.log("add businesses");
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleRemove() {
    this.setState({ removeClicked: true });
    console.log("remove businesses");
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Your Business Tool!</h1>
        <p className="lead">
          This convenient app lets you view all potential business mergers in
          one convenient place.
        </p>
        <hr className="my-4" />
        <p>Select the action you would like to take below to get started.</p>
        <button
          className="btn btn-info btn-lg"
          id="viewAll"
          onClick={this.handleView}
        >
          View Businesses
        </button>
        <button
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#editModal"
          id="edit"
          onClick={this.handleEdit}
        >
          Edit Businesses
        </button>
        <AddBusiness onClick={this.handleAdd} />
        <button
          className="btn btn-info btn-lg"
          id="remove"
          onClick={this.handleRemove}
        >
          Remove a Business
        </button>
      </div>
    );
  }
}

export default Jumbotron;
