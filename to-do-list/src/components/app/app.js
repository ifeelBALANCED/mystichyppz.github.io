import React from 'react';

import AppHeader from '../app-header/';
import ToDoSearch from '../to-do-search/';
import ToDoFilter from '../to-do-filter/';
import ToDoList from '../to-do-list/';
import ToDoAddForm from '../to-do-add-form/';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toDoMaxId = 0;
    this.state = {
      filterType: 'all',
      searchText: '',
      toDos: [
        this.createToDo('Learn React'),
        this.createToDo('Make Awesome App'),
        this.createToDo('Have a lunch')
      ]
    };
  }

  createToDo(text) {
    return {
      id: ++this.toDoMaxId,
      text,
      isDone: false,
      isImportant: false
    }
  }

  handleToDoSearchChange = (searchText) => {
    this.setState({searchText});
  }

  handleToDoFilterChange = (filterType) => {
    this.setState({filterType});
  }

  toDoAdd = (toDoText) => {
    this.setState({
      toDos: this.state.toDos.concat(this.createToDo(toDoText))
    });
  };

  toDoDelete = (itemId) => {
    this.setState({
      toDos: this.state.toDos.filter((toDo) => toDo.id !== itemId)
    });
  };

  toDoToggleProp(propName, itemId) {
    return this.state.toDos.map((toDo) => {
      if (toDo.id === itemId) {
        toDo[propName] = !toDo[propName];
      }

      return toDo;
    });
  }

  toDoToggleDone = (itemId) => {
    this.setState({toDos: this.toDoToggleProp('isDone', itemId)});
  };

  toDoToggleImportant = (itemId) => {
    this.setState({toDos: this.toDoToggleProp('isImportant', itemId)});
  };

  render() {
    let toDos = this.state.toDos;
    const doneCnt = toDos.filter((toDo) => toDo.isDone).length;
    const toDoCnt = toDos.length - doneCnt;
    toDos = toDos.filter((toDo) => toDo.text.toLowerCase().includes(this.state.searchText));

    switch (this.state.filterType) {
      case 'active':
        toDos = toDos.filter((toDo) => !toDo.isDone);
        break;
      case 'done':
        toDos = toDos.filter((toDo) => toDo.isDone);
        break;
      default:
        break;
    }

    return (
      <div className="container pt-4">
        <AppHeader toDo={toDoCnt} done={doneCnt} />

        <div className="row my-3">
          <div className="col-12 d-flex">
            <ToDoSearch onChange={this.handleToDoSearchChange} />
            <ToDoFilter filterType={this.state.filterType} onFilterChange={this.handleToDoFilterChange} />
          </div>
        </div>

        <div className="row">
          <ToDoList
            toDos={toDos}
            onToDoDelete={this.toDoDelete}
            onToDoToggleDone={this.toDoToggleDone}
            onToDoToggleImportant={this.toDoToggleImportant}
          />
        </div>

        <div className="row">
          <ToDoAddForm onToDoAdd={this.toDoAdd} />
        </div>
      </div>
    );
  }
};
