const http = require('http');
const fs = require('fs')
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('index.hatml', function(error, data){
    if (error) {
     res.writeHead(404)
     res.write('Error: File Not Found')   
    } else {
        res.write(data)
    }
  })
  res.end()
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})