import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//styles
import './styles/App.scss';
//layouts
import Header from './layouts/Header';
import ModalNewTask from './layouts/ModalNewTask';
import TaskList from './layouts/TaskList';

class App extends Component {
  state = {
    tasks: [],
    template: [
      {
        id: 0,
        text: "Tytuł 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum.",
        list: "to-do",
        active: false,
      },
      {
        id: 1,
        text: "Tytuł 2",
        description: "Lorem ipsum dolor sit amet, consectetur.",
        list: "in-progress",
        active: false,
      },
      {
        id: 2,
        text: "Tytuł 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum.",
        list: "in-progress",
        active: false,
      },
      {
        id: 3,
        text: "Tytuł 4",
        description: "Lorem ipsum dolor sit amet, consectetur.",
        list: "in-progress",
        active: false,
      },
      {
        id: 4,
        text: "Tytuł 5",
        description: "Lorem ipsum dolor sit amet, consectetur.",
        list: "done",
        active: false,
      },
      {
        id: 5,
        text: "Tytuł 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum.",
        list: "done",
        active: false,
      },
      {
        id: 6,
        text: "Tytuł 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum.",
        list: "canceled",
        active: false,
      },
    ],
  }

  counter = this.state.tasks.length;

  addTask = (text, description, list) => {
    const task = {
      id: this.counter,
      text,
      description,
      list,
      active: false,
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))
    
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  editTask = (id, list) => {    
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
    if (task.id === id) {
      task.list = list
      }
    })
    this.setState({
      tasks
    })
  }

  findTask = (findText) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.text === findText) {
        task.active = !task.active ;
      } else if (findText === null) {
        task.active = false;        
      }
    })
    this.setState({
      tasks
    })
  }

  render() { 
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header search={this.findTask} />
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} edit={this.editTask}/>
          <ModalNewTask add={this.addTask}/>
        </div>
      </Router>
     );
  }
}
 
export default App;