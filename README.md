# pres-node-web-scraping
A presentation about web scraping techniques using Node.js for the [Node.jSTL](http://www.meetup.com/node-jSTL/) meetup.

## Overview
The presentation is built with [Reveal.js](https://github.com/hakimel/reveal.js) and is hosted on GitHub Pages: http://paulzerkel.github.io/pres-node-web-scraping/

Edit the root `index.html` file to change the presentation. All of the files for Reveal.js are in `/reveal`. The gh-pages branch contains the live site.

## Examples
All examples are in `/examples`. Run `npm install` in each directory to install the required dependencies.

1. `trivial` - A simple example of finding keywords in HTTP responses with regex
1. `dom` - Demonstrates the advantage of having a DOM
1. `automate` - Full browser automation

The examples target a site that was made for this presentation. The target site is [also available](https://github.com/paulzerkel/scraping-targets). See the target site's repo for more information.

## Notes
Notes for the presentation follows.

### Title
* Web Scraping in Node.js
* 8/11/2016
* This presentation will cover what web scraping is and three approaches using Node.js.

### Who Am I?
* My name is Paul Zerkel and I run the tech side of the local startup Manufacturers’ Inventory. We use node.js for parts of our backend systems
* I also work as a software consultant where my focus is development and system architecture.

### A Quick Background on Scraping
* Scraping is the act of programmatically consuming a User Interface and extracting unstructured information for the purpose of creating structure data.
* Build a read-only API on top of a User Interface as opposed to a database, existing API, etc.
* Before web scraping there was screen scraping.
    * Intercept terminal communication and extract relevant data.
    * Listen for window messages in a GUI application and extract data from fields or controls.
    * Still used as a legacy application interface strategy.
* Document Scraping involves extracting structured data from PDFs, Word documents, etc. [Tabula](http://tabula.technology/) is a PDF extraction tool created by Pro Publica.
    * Investigative journalists use this technology to extract data from disclosure reports in order to make interactive datasets.
    * Financial documents, such as reports, can contain data that is more valuable if it can be stored and manipulated independent from the document.

### Web Scraping
* Process the responses from HTTP requests for the purposes of processing the data in some way instead of just displaying to users.
* Possibly involves handling the responses in a fashion similar to a browser (or, exactly like a browser)
* At a minimum requires parsing data out of raw web server responses.
* Can be up to programmatically driving a web browser in order to have a dynamic DOM and JavaScript support.

### Common Examples
* If a website doesn't have a publicly available API, scraping may be an answer.
* Build applications that require 3rd party web data
    * Alerts - BYO Google Alerts, Price changes
    * Display a page in another format - Pocket, Instapaper, etc
    * Data aggregation - Padmapper, crime stats
    * Financial data - Yodlee
    * Niche search engine - Scrape social media and blog posts and analyze it

### Pros of Web Scraping
* In the best case scenarios web scraping is significantly more straightforward than traditional screen scraping.
* You don't need to deal with binary protocols or operating system level messaging.
* HTML provides some structure to the data.
* It is generally easy to reason about using tools we're already familiar with.
    * Chrome developer tools
    * As simple as basic text processing
    * Selectors for specifying what data to read
    * Curl for reading raw responses on the commandline

### Potential Issues
* Still not foolproof and it comes with its own set of challenges
    * If you have the option to just use an API - DO IT
* UI changes can render existing web scraping scripts useless.
    * Ideally, UI changes would be done via CSS only and the HTML structure wouldn't change, but that rarely happens.
    * [Structured schemas](https://schema.org/) exist but adoption is infrequent and inconsistent.
    * The data may simply no longer be available.
* Client heavy web applications will require a full DOM and JavaScript interpreter.
* A site's terms of service and robots.txt may prevent you from scraping a site.
* Rate limiting, session tracking, IP bans, etc can all disrupt your ability to access a web site in a timely manner.

### Trivial Example
* Simplest use case is checking for the presence of text in the response body.
* You don't need anything other that the standard node `http` library.
* Easy to implement and can be used for alerts or the foundation for more complicated processing.
* It's also easy to outgrow this. You'll find yourself spending more and more time implementing logic around the request, response, and body processing. Still - start easy!
* Consider helper libs such as [`got`](https://github.com/sindresorhus/got)
    * Got extents the existing HTTP functionality and lets you use a more concise promise syntax.

### Build a DOM
* Using a regex is fine if you know exactly what you're looking for.
* What if you don't know the value of what you're looking for? Do you want to try to parse HTML etc with a regex? Probably not!
* [`cheerio`](https://github.com/cheeriojs/cheerio) provides a DOM, selectors, and jQuery style API for manipulating the dom.

### More on Cheerio
* JSDOM replacement
* jQuery style API
* `.load(body)`, `find('selector')`, `forEach(index, element) =>`, etc 
* Test in browser with jQuery or just test your selector with `document.querySelectorAll`
* Minor gotcha - the DOM reflects the actual HTML and won't automatically insert elements such as tbody.

### Browser Automation

### Nightmare

### Gotchas