const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');

var id = '5bfb977af5568a1cc45ce85a';
if(!ObjectID.isValid(id)){
  console.log('Id not valid');
}

// Todo.find({
//   _id : id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
Todo.findById(id).then((todo)=>{
  console.log('Todo BY id',todo);
}).catch((e)=>console.log(e));
