 const request = require('request');
 const fs = require('fs')
const recieved = process.argv.slice(2);
const filename = recieved[1];
const url = recieved[0];

request(url, (error, response, body) => {
  if(error){
    console.log('error:', error);
    return;
  }
  fs.writeFile(filename, body, err => {
    if (err) {
      console.error(err)
      return;
    }
      const stats = fs.statSync(filename);
      const fileSizeInBytes = stats.size;
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${filename}`)
  })
});
