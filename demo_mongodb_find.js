//No parameters in the find() method gives you the same result
// as SELECT * in MySQL.

//The find() method returns all occurrences in the selection.

//The first parameter of the find() method is a query object.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Find all documents in the customers collection:
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});