# pres-node-web-scraping
A presentation about web scraping techniques using Node.js for the [Node.jSTL](http://www.meetup.com/node-jSTL/) meetup.

## Overview
The presentation is built with [Reveal.js](https://github.com/hakimel/reveal.js) and is hosted on GitHub Pages: http://paulzerkel.github.io/pres-node-web-scraping/

Edit the root `index.html` file to change the presentation. All of the files for Reveal.js are in `/reveal`. The gh-pages branch contains the live site.

## Examples
All examples are in `/examples`. Run `npm install` in each directory to install the required dependencies.

1. `TBD` - TBD description

The examples target a site that was made for this presentation. The target site is also available TBD.

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
* Process the responses from HTTP requests (HTML, JSON, images, etc) for the purposes of processing the data in some way instead of just displaying to users.
* Possibly involves handling the responses in a fashion similar to a browser (or, exactly like a browser)
* At a minimum requires parsing data out of raw web server responses.
* Can be up to programmatically driving a web browser in order to have a dynamic DOM and JavaScript support.

### Common Examples
* If a website doesn't have a publicly available API, scraping may be an answer.
* Build applications that require 3rd party web data
    * Alerts - BYO Google Alerts, Price changes
    * Data Aggregation - Padmapper, crime stats
    * Financial Data - Yodlee
    * Niche Search Engine

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

### Trivial Examples

### Lets add a DOM

### Full Browser Automation