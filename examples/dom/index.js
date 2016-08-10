'use strict';

const got = require('got');
const cheerio = require('cheerio');

got('localhost:8080/about', {
  headers: {
    'User-Agent': 'nodejstl-bot',
  }})
  .then(response => {
    let $ = cheerio.load(response.body);
    /*
    $('table.list > tr').each((index, element) => {

    });
    */
    let address = $('address');
    if(address.length) {
      console.log(address.text());
    }

    //console.log($('address').text())
  })
  .catch(error => {
    console.log(error)
  });
