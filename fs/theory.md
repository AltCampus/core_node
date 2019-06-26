## File System
The fs module provides an API for interacting with the file system.

All file system operations have synchronous and asynchronous forms.

The asynchronous form always takes a completion callback as its last argument. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation was completed successfully, then the first argument will be null or undefined.

For example: 
```js
var fs = require('fs');
// all async method gets this callback  
// here (err, file) is completeion callback
fs.readFile(filename, (err, file) => {
    // Execution here
});
```

We are going to discuss few fs Apis which are widely used and which will be used for creatng a simple `CRUD` in project files like `fs.open`, `fs.readFile`, `fs.writeFile`, `fs.close`, `fs.ftruncate or truncate`, `fs.unlink`.

### Open File
fs.open is used to open a specific file.
It takes 4 arguments:
  - path of the file i.e filename
  - [flags](https://nodejs.org/api/fs.html#fs_file_system_flags) 
    - This determines the type of operation done using fs.open
    - 'wx' for creating a file
    - 'r+' for updating to a file
  - mode(integer) i.e readable and writable
    - defaults to 0o666
  - callback gets two arguments (err, fd)
    - err is returned when something is wrong while opening
    - fd(integer) is file descriptor if all is successful
```js
fs.open(path to file, 'wx', (err, fd) => {
  if(err) return console.log('error opening file');
  // Execute next function as we have file as fd
})
```

### Read File
fs.readFile is used to read a file.
It takes 3 arguments: 
  - path of file
  - optional encoding or flag
    - encoding defaults to null. set as 'utf8'
    - flag defaults to 'r'
  - callback takes (err, data)
    - err when something is wrong
    - data is file data
```js
fs.readFile(path or fd, (err, data) => {
  // Execution goes here..
})
```

### Write File
fs.writeFile is used to write to a file.
It takes 4 arguments
  - path of file
  - data to be written to the file
  - options like encoding, mode and flag
    - encoding defaults to 'utf8'
    - mode defaults to read and write
    - flag defaults to 'w'
  - callback takes only err
```js
fs.writeFile(path, data, (err) => {
  if(err) // throw or console
  // Next Execute here
})
```

### Close File
fs.close is used to close file. Whenever a file is opened using `fs.open`, its always a good practice to close the file.
fs.close takes 2 arguments 
  - fd i.e file descriptor, not the file name
  - err as callback

```js
fs.close(fs, err => {
  // Execution here
})
```

### Truncate File
fs.ftruncate is used to remove all contents from a file.
It takes 3 arguments
  - file descriptor(fd)
  - length for truncating
    - defaults to 0 // removes everything
  - err as callback
```js
fs.ftruncate(fd, (err) => {
  // Execution here
})
```

### Delete File
fs.unlink is used to delete a file.
It takes 2 arguments.
  - path to file
  - err as callcak
```js
fs.unlink(path, (err) => {
  // Return here
})
```


There are a lot more APIs which you can go through in official documentations.

### External Resources
1. https://nodejs.org/api/fs.html
