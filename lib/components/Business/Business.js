import React from 'react';
import './Business.css';
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}; //hardcoded business to represent what will be pulled by the yelp API later

class Buinsess extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'Business' },
      React.createElement(
        'div',
        { className: 'image-container' },
        React.createElement('img', { src: business.imageSrc, alt: '' })
      ),
      React.createElement(
        'h2',
        null,
        business.name
      ),
      React.createElement(
        'div',
        { className: 'Business-information' },
        React.createElement(
          'div',
          { className: 'Business-address' },
          React.createElement(
            'p',
            null,
            business.address
          ),
          React.createElement(
            'p',
            null,
            business.city
          ),
          React.createElement(
            'p',
            null,
            `${business.state} ${business.zipCode}`
          )
        ),
        React.createElement(
          'div',
          { className: 'Business-reviews' },
          React.createElement(
            'h3',
            null,
            business.category
          ),
          React.createElement(
            'h3',
            { className: 'rating' },
            `${business.rating} stars`
          ),
          React.createElement(
            'p',
            null,
            `${business.reviewCount} reviews`
          )
        )
      )
    );
  }
}
export default Business;