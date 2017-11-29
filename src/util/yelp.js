const clientId = 'Q1q4K-fn2vUbxsbzLMssNg';
const secret = 'T4tCNUe4zLXutdQ3yCeUHJZsk8oOqhdscC3QvkuZPeiuI1HrvxfeIiLtHeGgHAwt';
let accessToken;

let yelp = {getAccessToken() {
  if (accessToken) {
    return new Promise(resolve => resolve(accessToken));
  }// we already have a token so we need a promise to resolve that token
  return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`);
}
};
