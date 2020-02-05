//  npm install mongodb

//Part 1: creating db(mydb)

var MongoClient = require('mongodb').MongoClient;

//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db){
  if (err) throw err;
  console.log("Database created!");
  db.close();              // if we dont close, we still be connected to db
});



