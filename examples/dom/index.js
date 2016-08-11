'use strict';

const got = require('got');
const cheerio = require('cheerio');

got('localhost:8080/about', {
  headers: {
    'User-Agent': 'nodejstl-bot',
  }})
  .then(response => {
    let $ = cheerio.load(response.body);
    // select by element type
    let address = $('address');

    if(address.length) {
      console.log("Company Info:");
      console.log(address.text());
    }

    // selecting by itemprop
    let streetAddress = $('[itemprop="name"]');
    console.log(`Street: ${streetAddress.text()}`);

    // a more complex selector and loop
    $('.team tbody tr').each((index, element) => {
      const $element = $(element);
      const employee = {
        index: index,
        name: $element.find('td.name').text(),
        title: $element.find('td.title').text(),
        email: $element.find('td.email a').text(),
        phone: $element.find('td.phone').text()
      };

      console.log(`Employee: ${employee.index}`);
      console.log(`\tName: ${employee.name}`);
      console.log(`\tTitle: ${employee.title}`);
      console.log(`\tEmail: ${employee.email}`);
      console.log(`\tPhone: ${employee.phone}`);
    });
  })
  .catch(error => {
    console.log(error)
  });
