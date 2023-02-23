import React from "react";
import './UserForm.css'

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      description: "",
      gender: "",
      acceptTerms: false,
    };
  }
  //Single eventhandler for all for events
  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  /*  handleDescChange = (event) => {
            this.setState({description: event.target.value});
        }

        handleGendChange = (event) =>{
            this.setState({gender: event.target.value});
        } 

        handleAcceptTermChange = (event) => {
            this.setState({acceptTerms: event.target.checked});
        } */

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "User name: " +
        this.state.userName +
        "\n Description: " +
        this.state.description +
        "\n Gender: " +
        this.state.gender +
        "\n Accept Terms & Conditions: " +
        this.state.acceptTerms
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Name:{" "}
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Gender:{" "}
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option>Choose. ..</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            Description:{" "}
            <textarea
              width="10"
              height="20"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            AcceptTerms:{" "}
            <input
              type="checkbox"
              name="acceptTerms"
              checked={this.state.acceptTerms}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}
export default UserForm;
