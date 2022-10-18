#!/usr/bin/node
/**
 * Script that writes a string to a file
 */

const fs = require('fs');

try {
  fs.writeFile(process.argv[2], process.argv[3], 'utf-8', function (error, result) { if (error) console.log(error); });
} catch (error) {
  console.log(error);
}
