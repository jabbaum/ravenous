import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};//end sortByOptions

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: '', location: '', sortby: 'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);//binding this to the eventhandler
    this.handleLocationChange = this.handleLocationChange.bind(this);//binding this to the eventhandller
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy == sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }//end getSortByClass method

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }// end event handler handleSortByChange

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange(sortByOptionValue, this)}>{sortByOption}</li>
    });
  }//end renderSortByOptions method

  handleTermChange(e) {
    this.setState({term: e.target.value});
  }//end event handler handleTermChange

  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }//end event handler handleTermChange

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();//prevent the default action of clicking the button take place.
  }//end event handler handleSearch to handle searchYelp passed in from App Component

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}
export default SearchBar;
