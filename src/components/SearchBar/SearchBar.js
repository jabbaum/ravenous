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
  }
  getSortByClass(sortByOption) {
    if (sortBy == sortByOption) {
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
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
    });
  }//end renderSortByOptions method
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}
export default SearchBar;
