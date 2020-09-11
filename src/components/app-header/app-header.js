import React from 'react';


export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 d-flex">
          <h1 className="flex-grow-1">To-Do List</h1>
          <div className="text-muted mt-auto">{this.props.toDo} more to do, {this.props.done} done</div>
        </div>
      </div>
    );
  }
};
