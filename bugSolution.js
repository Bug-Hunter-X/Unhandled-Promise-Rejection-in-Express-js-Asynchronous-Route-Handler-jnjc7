const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello from Express!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Something went wrong!'); // Send an error response
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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