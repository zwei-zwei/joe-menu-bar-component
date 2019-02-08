const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const UserDb = require('../database/Users');

const faker = require('faker');

faker.locale = 'en_US';


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

// GET request
app.get('/users', (req, res) => {
  UserDb.find({}, (err, data) => {
  })
  .limit(100)
  .then((data) => {
    res.send(data);
    console.log('request body, first item -->', data[0]);
  })
  .catch((err) => {
    console.log(err);
  })
});

// POST request
app.post('/adduser', (req, res) => {
  const newUser = new UserDb({
    user_id: req.body.user_id,
    display_name: req.body.display_name,
    logo: req.body.logo,
    profile_image_url: req.body.profile_image_url,
    category: req.body.category,
    followers: req.body.followers,
    Following: req.body.Following,
  });
  newUser.save().then(user => res.json(user));
})

// UPDATE request


// DELETE request

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});