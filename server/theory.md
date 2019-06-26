## basic server

HTTP module is also used to fetch resources from remote web urls.
```js
  var http = require('http');

  http.get('http://google.com', (res) => {
    // res contains data from google server
    res.on('data', (chunk) => {
      // store the chunk here
    })
  })
``` 