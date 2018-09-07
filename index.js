'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const catRouter = require('./routes/cats');
const dogRouter = require('./routes/dogs');

const Queue = require('./utils/queue');

const app = express();

const dogQueue = new Queue;

dogQueue.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});
dogQueue.enqueue({
  imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41872268/1/?bust=1528771699&width=600',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Ice',
  sex: 'Male',
  age: 3,
  breed: 'American Bulldog',
  story: 'Owner Passed away'
});
dogQueue.enqueue({
  imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42408195/1/?bust=1533670935&width=600',
  imageDescription: 'A happy shih zhu sitting in a car seat',
  name: 'Lola',
  sex: 'Female',
  age: 4,
  breed: 'Shih Tzu',
  story: 'Miscared for by previous owner'
});
dogQueue.enqueue({
  imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42158868/1/?bust=1531417913&width=600',
  imageDescription: 'A labrador retriever mix with a funny hat sweater on',
  name: 'Monae',
  sex: 'Female',
  age: 4,
  breed: 'Labrador Retriever Mix',
  story: 'Owner Passed away'
});
dogQueue.enqueue({
  imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42111872/1/?bust=1530939733&width=600',
  imageDescription: 'A happy looking dog',
  name: 'Elton',
  sex: 'Male',
  age: 3,
  breed: 'Shepherd & Collie Mix',
  story: 'Owner Passed away'
});

const catQueue = new Queue;
catQueue.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
catQueue.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy2',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
catQueue.enqueue({
  imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42673933/1/?bust=1536169228&width=300', 
  imageDescription: 'A siamese cat sitting comfortably',
  name: 'Chloe',
  sex: 'Female',
  age: 2,
  breed: 'Siamese',
  story: 'Thrown on the street'
});
catQueue.enqueue({
  imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42280855/1/?bust=1532462146&width=600', 
  imageDescription: 'A tabby sitting comfortbaly',
  name: 'Xavier',
  sex: 'Male',
  age: 2,
  breed: 'Tabby',
  story: 'Owner passed away'
});
catQueue.enqueue({
  imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42280764/1/?bust=1532461910&width=600', 
  imageDescription: 'A domestic short hair sitting next to a phone outlet',
  name: 'Luka',
  sex: 'Male',
  age: 2,
  breed: 'Domestic Short Hair',
  story: 'Thrown on the street'
});


app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(express.json());

app.get('/api/cat', (req, res, next) => {
  res.json(catQueue.peek());
});
app.delete('/api/cat', (req, res, next) => {
  res.json(catQueue.dequeue());
});
app.get('/api/dog', (req, res, next) => {
  res.json(dogQueue.peek());
});
app.delete('/api/dog', (req, res, next) => {
  res.json(dogQueue.dequeue());
});

// Custom 404 Not Found route handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
