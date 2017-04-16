// npm packages
import express from 'express';

// init app
const app = express();

// test method
app.get('/', (request, response) => {
  response.send('Hello World!');
});
