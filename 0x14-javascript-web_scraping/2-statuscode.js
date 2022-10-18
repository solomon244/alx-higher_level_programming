#!/usr/bin/node
/*
 * script that display the status code of a GET request
 */

const request = require('request');
const URL = process.argv[2];

request(URL, function (error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('code:', response && response.statusCode);
  }
});
