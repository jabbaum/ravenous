import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}; //end sortByOptions

class SearchBar extends React.Component {
  renderSortByOptions() {
    return;
    Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return React.createElement(
        'li',
        { key: sortByOptionValue },
        sortByOption
      );
    });
  } //end renderSortByOptions method
  render() {
    return React.createElement(
      'div',
      { className: 'SearchBar' },
      React.createElement(
        'div',
        { className: 'SearchBar-sort-options' },
        React.createElement(
          'ul',
          null,
          this.renderSortByOptions()
        )
      ),
      React.createElement(
        'div',
        { className: 'SearchBar-fields' },
        React.createElement('input', { placeholder: 'Search Businesses' }),
        React.createElement('input', { placeholder: 'Where?' })
      ),
      React.createElement(
        'div',
        { className: 'SearchBar-submit' },
        React.createElement(
          'a',
          null,
          'Let\'s Go'
        )
      )
    );
  }
}
export default SearchBar;