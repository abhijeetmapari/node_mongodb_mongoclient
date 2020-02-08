var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  /*Delete all customers where the address starts with an "O":*/
  var myquery = { address: /^O/ };

  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;

    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
