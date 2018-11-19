const{ MongoClient ,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
  return console.log("Unable to Connect Mongo Db");
  }
  console.log("Connected to MongoDb Server");
  const db = client.db('TodoApp');
//deleteMany
  db.collection('Todos').deleteMany({text: "Eat Lunch"});
//deleteOne

//findOneAndDelete
//  client.close();
});
