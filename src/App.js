import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import { Yelp } from './util/yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: []
    }//end initial state
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(business => {
        this.setState({businesses: businesses});
      }
    );
  }// end searchYelp method, params are the 3 pieces of info that will be sent to the yelp api

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList />
      </div>
    );
  }
}

export default App;
