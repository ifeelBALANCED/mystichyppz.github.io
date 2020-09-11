import React from 'react';


export default class ToDoAddForm extends React.Component {
  state = {
    toDoText: ''
  }

  handleChange = (event) => {
    this.setState({toDoText: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({toDoText: ''});
    this.props.onToDoAdd(this.state.toDoText);
  }

  render() {
    return (
      <form className="col-12 mt-3 d-flex" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.toDoText}
          className="form-control"
          placeholder="What needs to be done..."
          onChange={this.handleChange}
        />

        <button
          type="submit"
          className="btn btn-primary ml-3"
        >Add</button>
      </form>
    );
  }
};
