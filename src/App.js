import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//styles
import './styles/App.scss';
//layouts
import Header from './layouts/Header';
import ModalNewTask from './layouts/ModalNewTask';
import TaskList from './layouts/TaskList';
// import ModalEditTask from './components/ModalEditTask';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Tytuł",
        description: "Opis",
        list: "to-do"
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
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
  }

  deleteTask = (id) => {
    const tasks= [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  editTask = (id) => {
    // this.setState({
    //   showEdit: true
    // })
    console.log("edycja tasku na zmianę listy o id = " + id)
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
    if (task.id === id) {
      // switch (task.list) {
      //   case 'to-do':
      //     task.list = "in-progress";
      //     break;
      //   case 'in-progress':
      //     task.list = "done";
      //     break;
      //   case 'done':
      //     task.list = "canceled";
      //     break;
      //   default:
      //     break;
      // }
      }
    })
    this.setState({
      tasks
    })
  }

  render() { 
    // const showEdit = this.state.showEdit;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header />
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} edit={this.editTask}/>
          <ModalNewTask add={this.addTask}/>
          {/* {showEdit ? <ModalEditTask /> : null }  */}
        </div>
      </Router>
     );
  }
}
 
export default App;