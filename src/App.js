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
    tasks: [
      {
        id: 0,
        text: "Tytuł",
        description: "Opis",
        list: "to-do",
        active: false,
      }
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
        task.active = true ;
      } else {
        alert('Nie znaleziono zadania o podanej nazwie')
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
          <Header search={this.findTask}/>
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} edit={this.editTask}/>
          <ModalNewTask add={this.addTask}/>
        </div>
      </Router>
     );
  }
}
 
export default App;