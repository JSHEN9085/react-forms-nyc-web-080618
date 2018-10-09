// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} name="firstName" value={this.state.firstName} />
        <input type="text" onChange={this.handleChange} name="lastName" value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;
