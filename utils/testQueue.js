
const Queue = require('./queue');

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

module.exports = {dogQueue, catQueue};