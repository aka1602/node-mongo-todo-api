const{ MongoClient ,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
  return console.log("Unable to Connect Mongo Db");
  }
  console.log("Connected to MongoDb Server");
  const db = client.db('TodoApp');
//deleteMany
  // db.collection('Todos').deleteMany({"test": "Eat Lunch"}).then((result)=>{
  //   console.log(result);
  // });
//deleteOne
// db.collection('Todos').deleteOne({"text": "Eat Lunch"}).then((result)=>{
//   console.log(result);
// });
//findOneAndDelete
db.collection('Todos').findOneAndDelete({"completed": false}).then((result)=>{
  console.log(result);
});
//  client.close();
});
