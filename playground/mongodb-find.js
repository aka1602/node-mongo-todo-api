const{ MongoClient ,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
  return console.log("Unable to Connect Mongo Db");
  }
  console.log("Connected to MongoDb Server");
  const db = client.db('TodoApp');

  // db.collection('Todos').find({_id : new ObjectID('5be653ede79faa758cf8b0ee')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count :${count}`);

  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
//  client.close();
});
