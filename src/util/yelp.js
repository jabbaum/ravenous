const clientId = 'Q1q4K-fn2vUbxsbzLMssNg';
const secret = 'T4tCNUe4zLXutdQ3yCeUHJZsk8oOqhdscC3QvkuZPeiuI1HrvxfeIiLtHeGgHAwt';
let accessToken;

export let Yelp = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }// we already have a token so we need a promise to resolve that token
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {method: 'POST'}).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },
  search(term, location, sortBy) {
    return Yelp.getAccessToken().then(() => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {Authorization: `Bearer ${accessToken}`}
        });
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.business) {
        return jsonResponse.business.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count;
          }
        });
      }
    });
  }
};// end Yelp object.
