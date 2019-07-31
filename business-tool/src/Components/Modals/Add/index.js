import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./style.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    height: "40rem",
    borderRadius: "10px"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(12, 6, 102, 0.6)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

class AddBusiness extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="add-button">
        <button className="btn btn-info btn-lg addBusiness" onClick={this.openModal}>
          Add a Business
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Modal"
        >
          <h2
            className="text-center"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Add a Business
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="businessName"
                value={this.state.businessName}
                onChange={this.handleChange}
                placeholder="Business Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.address}
                id="address"
                onChange={this.handleChange}
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.status}
                id="status"
                onChange={this.handleChange}
                placeholder="Status"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="contacts"
                value={this.state.contacts}
                onChange={this.handleChange}
                placeholder="Contact"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="financialPerformance"
                value={this.state.financialPerformance}
                onChange={this.handleChange}
                placeholder="Financial Performance"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              color="primary"
              className="btn btn-primary"
            />
            <button className="btn btn-danger" onClick={this.closeModal}>
              Close
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddBusiness;
