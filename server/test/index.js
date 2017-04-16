// npm packages
import test from 'tape';
import request from 'supertest';

// our packages
import app from '../src/app';

test('GET /', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((error, response) => {
      const expectedBody = 'Hello world!';
      const actualBody = response.text;

      t.error(error, 'No error');
      t.equal(actualBody, expectedBody, 'Retrieve body');
      t.end();
    });
});
