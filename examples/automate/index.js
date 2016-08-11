'use strict';

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare.goto('http://localhost:8080/products')
  .wait('.products tr')
  .screenshot('./site.png')
  .evaluate(function () {
    var elements = []
    var rows = document.querySelectorAll('.products tr');
    for (var i = 0; i < rows.length; i++) {
      var item = rows[i];
      var tds = item.querySelectorAll('td');
      // var price = tds[2].innerText.subString(1);
      // var weight = tds[3].innerText.subString(0, tds[3].innerText.length - 4);
      elements.push({
        name: tds[0].innerText,
        description: tds[1].innerText,
        price: tds[2].innerText,
        weight: tds[3].innerText,
      });
    }
    return elements;
  })
  .end()
  .then(function (results) {
    var totalPrice = 0;
    results.forEach(result => {
      console.log(`Name: ${result.name}`);
      console.log(`Description: ${result.description}`);
      console.log();
      totalPrice += Number(result.price.substring(1));
    });
    totalPrice = totalPrice.toFixed(2)
    console.log(`Total Value: $${totalPrice}`)
  })
  .catch(function (error) {
    console.error('Big problems:', error);
  });
