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
    tasks: [
      {
          id: 0,
          text: "tytuł zadania 1",
          description: "ops zadania 1",
          list: "todo",
      },
      {
          id: 1,
          text: "tytuł zadania 2",
          description: "ops zadania 2",
          list: "progress",
      },
      {
          id: 2,
          text: "tytuł zadania 3",
          description: "ops zadania 3",
          list: "progress",
      },
      {
          id: 3,
          text: "tytuł zadania 4",
          description: "ops zadania 4",
          list: "todo",
      },
    ],
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