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
  .limit(1000)
  .sort({_id: 1})
  .then((data) => {
    res.send(data);
    console.log('request body, first item -->', data[0]);
  })
  .catch((err) => {
    console.log(err);
  })
});

// Query request
app.get('/findone', (req, res) => {
  UserDb.findOne(
    {display_name: "test"}
  )
  .then(item=> res.send(item))
  .catch((err) => {
    console.log('error: ', err);
  })
})

// POST request
app.post('/adduser', (req, res) => {
  if(!req.body){
    console.log('not found');
  } else {
    let newUser = new UserDb(req.body)
    newUser.save(err=> {
      if(err){
        console.log(err);
      } else {
        res.json(newUser);
      }
    });
  }
})

// UPDATE request
// app.post('/update', (req, res) => {
//   var id = req.body.user_id;
//   UserDb.findById(id, (err, doc) => {
//     if(err) {
//       console.log('error: ', err);
//     }
//     doc.id = req.body.user_id;
//     doc.display_name = req.body.display_name;
//     doc.logo = req.body.logo;
//     doc.profile_image_url = req.body.profile_image_url;
//     doc.category = req.body.category;
//     doc.followers = req.body.followers;
//     doc.Following = req.body.Following;
//     doc.save();
//   })
// })


// DELETE request
app.delete('/delete', (req, res) => {
  let id = req.body.user_id
  UserDb.findByIdAndRemove(id).exec();
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});