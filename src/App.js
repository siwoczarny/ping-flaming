import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//styles
import './styles/App.scss';
//layouts
import Header from './layouts/Header';
import TaskModalButton from './layouts/TaskModalButton';
import TaskList from './layouts/TaskList';


class App extends Component {
  state = {  }
  render() { 
    return (
      
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header />
          <TaskList />
          <TaskModalButton />
        </div>
      </Router>
      
     );
  }
}
 
export default App;