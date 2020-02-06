/* The second parameter of the find() method is the projection object that 
describes which fields to include in the result.

This parameter is optional, and if omitted, all fields will be 
included in the result. */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");

  dbo.collection("customers").find({}, 
    { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    
  // dbo.collection("customers").find({}, 
  //  { projection: { address: 0 } }).toArray(function(err, result) {    
  
  //either all fields 1 or all 0 (except _id),, this will give error
   // dbo.collection("customers").find({}, 
   //  { projection: { name: 1, address: 0 } }).toArray(function(err, result) {

    if (err) throw err;
    console.log(result);
    //console.log(result[2].address);
    db.close();
  });
});



/* You are not allowed to specify both 0 and 1 values in the
 same object (except if one of the fields is the _id field). 
 If you specify a field with the value 0, all other fields get
  the value 1, and vice versa: */