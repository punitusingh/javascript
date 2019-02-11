const express=require('express');

const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());

const path=require('path');

const db=require("./db");

const collection= "todo"; //hold all our todos


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', (req, res)=> {
  const userInput = req.body;
  console.log('userInput', userInput);
  db.getDB().collection(collection).insertOne(userInput, (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.json({result: result, document: result.ops[0]});
    }
  });

});

app.get('/getTodos', (req, res)=>{
  db.getDB().collection(collection).find({}).toArray((err, documents)=>{
    if(err){
      console.log(err);
    }else{
      console.log(documents);
      res.json(documents);
    }
  })
});

app.put('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  const userInput = req.body;
  // Find Document By ID and Update
    db.getDB().collection(collection).findOneAndUpdate({_id: db.getPrimaryKey(todoID)},{$set: { todo: userInput.todo }}, {returnOriginal: false}, (err, result) => {
      if (err){
      console.log(err);
      }else{
      res.json(result);
    }
    })
  });


app.delete('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  // Find Document By ID and delete
  db.getDB().collection(collection).findOneAndDelete({_id: db.getPrimaryKey(todoID)}, (err, result) => {
    if (err){
      console.log(err);
    }else{
      res.json(result);
    }
  })
});



//arrow function that is cb, cb will be called
db.connect((err)=> {
  if(err){
    console.log('unable to connect to database');
    process.exit(1);
  }else{
    //expressjs
    app.listen(3000, ()=>{
      console.log('connected to database, app listening on port 3000');
    });
  }
});