

// var http = require('http');
// var fs = require('fs');

var server = http.createServer(requestHandler);

function requestHandler(req, res) {
  // handle all html file together
  if(req.url === '/') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(file_path).pipe(res);
    // for all css files
  } else if(req.url.includes('css')) {
    //handle css file here
    // first set headers ie. 'text/css'
    // read css file and send it in response using createReadStream

    // for handling images
  } else if(['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop())) {
    //send images here with appropraite content type
  }
  else {
    res.statusCode = 400;
    res.end('Page not found')
  }
}

server.listen(3000);
