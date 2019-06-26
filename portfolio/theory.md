### Fs
Normal filesystem operation like readFile or writeFile reads all the content into memory and then processess it. 
It can downgrade performance as memory consumption increases sharply.
When a large file(size in GBs) is being read, all contents are temporarily stored in memory, which reduces memory availability for other operations and hence degrades performance.    

### Streams
Streams breaks the larger files in smaller chunks and makes it available for processing. These smaller chunks are stored in memory as Buffers. These chunks consume a smaller section of memory at a time.

Examples are:
```js
var store = fs.createReadStream(path to file)
store.on('data', (chunk) => {
  res.write(chunk)
});
// Once all data is received, end event fires
store.on('end', () => {
  res.end()
})
```

Streams have a pipe method where received chunks could be passed to next function using pipe.

```js
http.createServer((req, res) => {
  // Here, creteReadStraem reads file into smaller chunks and the chunks are 
  // passed to response when availbale for processing. 
  fs.createReadStream(file to read).pipe(res);
})
```
Streams are recommended and widely used in node application as it differs from normal file system operation execution. By default, request and response objects in createServer are readable and writable streams respectively.

We can read from requests. It uses streams for reading contents.In the same way, we can write to responses using streams as default. 