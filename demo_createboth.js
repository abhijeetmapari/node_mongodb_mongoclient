// creating db and collection in one program

var MongoClient = require('mongodb').MongoClient;

//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb2";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;

  console.log("Database created!");

  var dbo = db.db("mydb2");

  //Create a collection name "customers":
  dbo.createCollection("mycollection", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

});