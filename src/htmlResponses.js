const fs = require('fs'); // filesystem

// assign files to variables
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// deliver client.html
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// deliver client2.html
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// create public objects for our variables/functions
// module pattern
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
