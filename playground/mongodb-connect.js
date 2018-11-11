const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
  return console.log("Unable to Connect Mongo Db");
  }
  console.log("Connected to MongoDb Server");
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: "Something to do",
    completed:false,

  },(err,result)=>{
    if(err){
      return console.log('unable to insert',err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  client.close();
});
