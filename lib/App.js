import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/Businesslist/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'h1',
        null,
        'ravenous'
      ),
      React.createElement(SearchBar, null),
      React.createElement(BusinessList, null)
    );
  }
}

export default App;