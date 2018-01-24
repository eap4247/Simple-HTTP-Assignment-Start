const fs = require('fs'); // filesystem

const meme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// deliver spongegar.png
const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(meme);
  response.end();
};

// exports
module.exports.getMeme = getMeme;
