// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'users'
// });

// connection.connect(function(err) {
//   if(err) {
//     return console.error('error ' + err.message);
//   }

//   console.log('Connected to the MySQL server. ')
// });


// module.exports.connection = connection;



const mongoose = require('mongoose');
const onlineDb = require('../config/keys');

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Users database');
});

const userSchema = mongoose.Schema({
	user_id: { type: Number, unique: true },
	display_name: String,
	logo: String,
	profile_image_url: String,
	category: String,
	followers: Number,
	Following: Number,
});


const UserDb = mongoose.model('User', userSchema);

module.exports = db;
module.exports = UserDb;