#!/usr/bin/node
/*
 * script that prints all characters of a Star Wars movie:
 */

const request = require('request');
const starWarsUri = 'https://swapi-api.hbtn.io/api/films/'.concat(process.argv[2]);

request(starWarsUri, function (_error, _response, body) {
  const characters = JSON.parse(body).characters;

  for (let i = 0; i < characters.length; ++i) {
    request(characters[i], function (_charError, _charResponse, charBody) {
      console.log(JSON.parse(charBody).name);
    });
  }
});
