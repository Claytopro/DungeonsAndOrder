import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
            <Sidebar />
            <Route path='/' component={Main} />
          </Router>
      </div>
    );
  }
}

export default App;
