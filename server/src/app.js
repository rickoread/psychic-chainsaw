// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// our packages
import {logger} from './util';

console.log(logger);

// init app
const app = express();

// setup loggin
app.use(morgan('combined', {stream: logger.stream}));

// add body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// catch all unhandler errors
app.use((err, req, res, next) => { // eslint-disable-line
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

// export app
export default app;
