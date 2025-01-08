const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(error => {
    // Error handling is missing here, causing the server to crash
    console.error('Error:', error);
  });
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error condition
      if (Math.random() < 0.5) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 100);
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});