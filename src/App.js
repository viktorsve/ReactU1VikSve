import React, { Component } from 'react';
import './App.css';
import DashboardComponent from './components/DashboardComponent';

// Root component which render our DashboardComponent
class App extends Component {
  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <div className="App">
          <DashboardComponent/>
      </div>
    );
  }
}

export default App;
