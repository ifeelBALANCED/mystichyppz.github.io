import React from 'react';

import './to-do-list-item.css';


export default class ToDoListItem extends React.Component {
  render() {
    let text = this.props.text;
    this.props.isDone && (text = <del>{text}</del>);
    this.props.isImportant && (text = <strong>{text}</strong>);

    return (
      <div className="to-do-list-item d-flex">
        <div className="to-do-list-item__text" onClick={this.props.onToDoToggleDone}>
          {text}
        </div>

        <button type="button" className="btn btn-outline-danger btn-sm ml-auto" onClick={this.props.onToDoDelete}>
          <span className="fa fa-trash-o"></span>
        </button>

        <button type="button" className="btn btn-outline-success btn-sm ml-1" onClick={this.props.onToDoToggleImportant}>
          <span className="fa fa-exclamation"></span>
        </button>
      </div>
    );
  };
}
