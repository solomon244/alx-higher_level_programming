#!/usr/bin/node
/*
 * a script that computes the number of tasks completed by user id
 */

const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const data = JSON.parse(body).reduce((acc, task) => {
    if (!acc[task.userId]) {
      if (task.completed) {
        acc[task.userId] = 1;
      }
    } else {
      if (task.completed) {
        acc[task.userId] += 1;
      }
    }
    return acc;
  }, {});
  console.log(data);
});
