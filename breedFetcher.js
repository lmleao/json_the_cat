const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length !== 0) {
      callback(null, data[0].description);
    } else {
      callback('Could not find specified breed. Please try again.', null);
    }
  });
};

module.exports = { fetchBreedDescription };