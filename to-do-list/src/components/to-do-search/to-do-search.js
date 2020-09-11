import React from 'react';


export default class ToDoSearch extends React.Component {
  render() {
    return (
      <div className="flex-grow-1">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(event) => this.props.onChange(event.target.value.toLowerCase())}
        />
      </div>
    );
  }
};
