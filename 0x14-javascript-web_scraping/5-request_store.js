#!/usr/bin/node
/*
 * a script that gets the contents of a webpage and stores it in a file
 * */
const request = require('request');
const fs = require('fs');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.error(error);
  }
  try {
    fs.writeFile(process.argv[3], body, 'utf-8', function (err, result) { if (err) console.log(err); });
  } catch (err) {
    console.log(err);
  }
});
