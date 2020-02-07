import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//styles
import './styles/App.scss';
//layouts
import Header from './layouts/Header';
import TaskModal from './layouts/TaskModal';
import TaskList from './layouts/TaskList';


class App extends Component {
  state = {
    tasks: [],
  }

  counter = 4

  addTask = (text, description, list) => {
    const task = {
      id: this.counter,
      text,
      description,
      list,
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
  }

  render() { 
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header />
          <TaskList tasks={this.state.tasks} />
          <TaskModal add={this.addTask}/>
        </div>
      </Router>
     );
  }
}
 
export default App;