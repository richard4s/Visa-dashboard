var MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const assert = require('assert');
// mongoose.Promise = global.Promise;

// const db = mongoose.connect('mongodb://mavericks:VISAcash12@ds052978.mlab.com:52978/scheduler', {useNewUrlParser: true});
// console.log(mongoose.connection);

// function checkDbConn(db) {
//   if(db) {
//     console.log('There was an error connecting to the database');
//   } else {
//     console.log('Connected to DB successfully!');
//   }
// }

// checkDbConn(db);

//Set up default mongoose connection

// var mongoDB = 'mongodb://mavericks:VISAcash12@ds052978.mlab.com:52978/scheduler';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Connection options
const defaultOptions = {
  // Use native promises (in driver)
  promiseLibrary: global.Promise,
  // useMongoClient: true,
  // Write concern (Journal Acknowledged)
  w: 1,
  j: true
};

function connect (mongoose, dbURI, options = {}) {
  // Merge options with defaults
  const driverOptions = Object.assign(defaultOptions, options);

  // Use Promise from options (mongoose)
  mongoose.Promise = driverOptions.promiseLibrary;

  // Connect
  mongoose.connect(dbURI, driverOptions);

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });

  return mongoose.connection;
}

connect(mongoose, 'mongodb://mavericks:VISAcash12@ds052978.mlab.com:52978/scheduler', defaultOptions);

// MongoClient.connect('mongodb://mavericks:VISAcash12@ds052978.mlab.com:52978/scheduler', {useNewUrlParser: true}, function (err, client) {
//   if (err) throw err

//   // var db = client.db('scheduler')
  
//   // db.collection('busops').find().toArray(function (err, result) {
//   //   if (err) throw err

    
//   // })
// })