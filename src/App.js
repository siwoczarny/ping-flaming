import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//styles
import './styles/App.scss';
//layouts
import Header from './layouts/Header';
import ButtonAddTask from './components/ButtonAddTask';


class App extends Component {
  state = {  }
  render() { 
    return (
      
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header />
          <ButtonAddTask />
        </div>
      </Router>
      
     );
  }
}
 
export default App;