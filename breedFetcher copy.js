const request = require('request');
const args = process.argv.slice(2, 3);
const breed = args[0];

// const breedFetcher = request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
//   console.log('error: ', error)
//   console.log('response: ', response && response.statusCode)
//   console.log('body: ', body)
// })
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// const data = JSON.parse(body)
// const breedFetcher = function(breed) {
// request(url, (error, response, body) => {
//   // console.log('error: ', error);
//   console.log('response: ', response && response.statusCode);
//   // const data = JSON.parse(body)[0].description;
//   // console.log('body: ', data);

//   try {
//     const data = JSON.parse(body)[0].description;
//     console.log('body: ', data);
//   } catch (error) {
//     console.log('No data found please confirm name of cat');
//   }
// });

// };

// breedFetcher(breed);

const fetchBreedDescription = function (breedName, callback) {
  request(url, (error, response, body) => {
    // console.log('error: ', error);
    console.log('response: ', response && response.statusCode);
    // const data = JSON.parse(body)[0].description;
    // console.log('body: ', data);

    try {
      const data = JSON.parse(body)[0].description;
      console.log('body: ', data);
    } catch (error) {
      console.log('No data found please confirm name of cat');
    }
  });
}