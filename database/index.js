// const MongoClient = require('mongodb').MongoClient
// const ObjectId = require('mongodb').ObjectID;
// const dbname = 'user';
// const url = "mongodb://localhost:3000";
// const mongoOptions = {useNewUrlParser : true};

// const state = {
//   db: null
// }

// const connect = (cb) => {
//   if(state.db)
//     cb();
//   else {
//     MongoClient.connect(url, mongoOptions, (err, client) => {
//       if(err)
//         cb(err);
//         else{
//           state.db = client.db(dbname);
//           cb();
//         }
//     })
//   }
// }

// const getPrimaryKey = (_id) => {
//   return ObjectID(_id);
// }

// const getDB = () => {
//   return state.db;
// }

// module.exports = {getDB, connect, getPrimaryKey};