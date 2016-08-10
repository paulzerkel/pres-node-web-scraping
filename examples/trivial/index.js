'use strict';

const http = require('http');

let options = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'nodejstl-bot',
  }
};

let req = http.request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  let body = '';

  res.on('data', data => {
    body += data.toString();
  });

  res.on('end', () => {
    let matcher = /sale/i;
    let result = matcher.exec(body);
    if (result) {
      console.log("It's a sale!!!");
      console.log("Found: " + body.substring(result.index, result.index + 10))
    } else {
      console.log("Save your money, no sale today.");
    }
  });
})

req.on('error', e => {
  console.log(`ERROR: ${e.message}`);
});

req.end();
