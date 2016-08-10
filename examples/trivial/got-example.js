'use strict';

const got = require('got');

got('localhost:8080', {
  headers: {
    'User-Agent': 'nodejstl-bot',
  }})
  .then(response => {
    let body = response.body;
    let matcher = /sale/i;
    let result = matcher.exec(body);
    if (result) {
      console.log("It's a sale!!!");
      console.log("Found: " + body.substring(result.index, result.index + 10))
    } else {
      console.log("Save your money, no sale today.");
    }
  })
  .catch(error => {
    console.log(error)
  });
