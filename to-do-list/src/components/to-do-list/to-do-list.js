import React from 'react';

import ToDoListItem from '../to-do-list-item/';


export default class ToDoList extends React.Component {
  render() {
    const toDoListItems = this.props.toDos.map((toDo) => {
      return (
        <li className="list-group-item px-3 py-2" key={toDo.id}>
          <ToDoListItem
            text={toDo.text}
            isDone={toDo.isDone}
            isImportant={toDo.isImportant}
            onToDoDelete={() => this.props.onToDoDelete(toDo.id)}
            onToDoToggleDone={() => this.props.onToDoToggleDone(toDo.id)}
            onToDoToggleImportant={() => this.props.onToDoToggleImportant(toDo.id)}
          />
        </li>
      )
    })

    return (
      <div className="col-12">
        <ul className="list-group">
          {toDoListItems}
        </ul>
      </div>
    );
  }
};
