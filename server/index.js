const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


// app.get('/username', function (req, res) {
//   database.connection.query('SELECT * FROM users', (error, results, fields) => {
//     if (error) {
//       console.log('error')
//     } else {
//       console.log('these are results & fields', results, fields);
//       res.json(results);
//     }
//   })
// });

app.get('/username', (req, res) => {
  db.find({}, (err, data) => {
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
  })
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});