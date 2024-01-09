import express from "express";
import mongoose from "mongoose";

// Express configuration
const app=express();
const port=4000;
app.use(express.urlencoded({extended: true}));

app.listen(port,()=>{
  console.log("Backend running http://localhost:4000")
})

// Mongo configuration
await mongoose.connect('mongodb://127.0.0.1/notie-db');

const userSchema = new mongoose.Schema({
  name: String,
  img: String,
  theme: String,
  current_note: String,
})
const User = mongoose.model("user",userSchema)


const taskSchema = new mongoose.Schema({
  task: String,
  user_id: String,
  check: Boolean
})
const Task = mongoose.model("task",taskSchema)


const noteSchema = new mongoose.Schema({
  title: String,
  note: String,
  user_id: String,
})
const Note = mongoose.model("note",noteSchema)


//-----------------------------------------------------


// Authenticate user and get user data
app.get("/user", async (req,res)=>{
  
   try{
    const user = await User.findOne({name : req.query.name});
    const task = user ?  await Task.find({user_id: user._id}).select("task check") : [];
    const note_list = user ?  await Note.find({user_id: user._id}).select("title") : [];

    let current_note

    if(user) {
      current_note = user.current_note ? await Note.findOne({_id: user.current_note}) : false;
    } else { current_note = false}

    res.json({user, task, note_list, current_note});
  } 

  catch (error){
    console.log(error)
    res.sendStatus(500)
  }
})

// Add task
app.post("/task", async(req,res)=>{
  const {task, user_id, check} = req.body

  try{
    const data = await Task({task, user_id, check}).save()
    res.json(data._id); // Return task id if successful
  }
  
  catch (error){
    console.log(error)
    res.sendStatus(500)
  }
})

//Mark task
app.put("/task", async (req,res)=>{
  const {tick, task_id} = req.body

  try{
    await Task.findOneAndUpdate({_id:task_id}, {check: tick})
    res.sendStatus(200); 
  }

  catch (error){
    console.log(error)
    res.sendStatus(500)
  }
})

// Edit task
app.patch("/task", async(req,res)=>{
  const {editTask, task_id} = req.body

  try{
    await Task.findOneAndUpdate({_id:task_id}, {task:editTask})
    res.sendStatus(200); 
  }

  catch (error){
    console.log(error)
    res.sendStatus(500)
  }
})

// Delete task
app.delete("/task", async(req,res)=>{

  try{
    await Task.findOneAndDelete({_id:req.query.task_id})
    res.sendStatus(200);
  }

  catch (error){
    console.log(error)
    res.sendStatus(500)
  }
})

//Edit note
app.patch("/note", async(req,res)=>{
  const {editNote, note_id} = req.body

  try{
    await Note.findOneAndUpdate({_id:note_id}, {note:editNote})
    res.sendStatus(200); 
  }

  catch (error){
    console.log(error)
    res.sendStatus(500)
  }

})