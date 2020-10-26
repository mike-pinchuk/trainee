const http = require("http");
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const stream = require("stream");
const zipFolder = require("zip-folder");

const PORT = process.env.PORT || 3003;
const file = path.join(__dirname, "pictures");
const endFile = path.join(__dirname, "result", "pic.zip");

async function start() {
  
  await zipFolder(file, endFile, err => {
    if (err) {
      console.log('This is an error: ', err)    
    } else {
      console.log('It is work!')
    }
  })
}

start()

const server = http.createServer((req, res) => {
  
  
  const wr = fs.createWriteStream(endFile)

  for (const data of wr) {
    wr.write(date)
    console.log('finished')
  }
  
  
  
  res.end(data)
})

server.listen(PORT, () => console.log('Server has been loaded...'))


