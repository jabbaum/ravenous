import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'BusinessList' },
      React.createElement(Business, null),
      React.createElement(Business, null),
      React.createElement(Business, null),
      React.createElement(Business, null),
      React.createElement(Business, null),
      React.createElement(Business, null)
    );
  }
}
export default BusinessList;