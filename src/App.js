import React, { Component } from 'react';
import './styles/App.css';
import Navigation from './components/navigation/navigation';
import Search from './components/search/search';

class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="App">
          App Component
      </div>
    );
  }
}

export default App;
