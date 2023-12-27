import React, {useState} from "react";
import Profile from "./section1/1-Profile";
import Date from "./section2/1-Date";
import Task from "./section2/2-Task";
import List from "./section2/3-List";
import Select from "./section3/1-Select";
import Editor from "./section3/2-Editor";
import {getUser,putTask,patchTask,delTask} from "./backend";


const data = await getUser("Desmond");
let currentNote

if (data.user.current_note) { 
  const index = (data.note).findIndex(item => 
    item._id === data.user.current_note
  );

  currentNote = data.note[index];
}
else{
  currentNote = {
    title: "Blank",
    data: "<h3>Click on the new note button to start having you document</h3>"
  }
}

function App() {
  const [list, setList] = useState(data.task);
  const [note, setNote] = useState(currentNote)
  
  function Section1(){
    return(
      <div id="section1">
        <Profile user={data.user}/>
      </div>
    );
  }

  function Section2(){
    return(
      <div id="section2"> 
        <Date />
        <Task user={data.user} add={addItem}/>
        <List task={list} 
          tick={tickItem} 
          edit={editItem}
          remove={removeItem}/>
      </div>
    );
  }
  
  function Section3(){
    return(
      <div id="section3">
        <Select title={note.title}/>
        <Editor note={note.data}/>
      </div>
    );
  }

  if(data){
    
    if(data.user){
      document.querySelector("body").setAttribute("class",`theme-${data.user.theme}`)
      return (
        <div id="main">
          <Section1/>
          <Section2/>
          <Section3/>
        </div>);
    }
    else{return <h1>User not found</h1>}

  } 
  else{ return <h1>Can't get data from server</h1> }

  function addItem(item){
    setList(prevList => [...prevList,item]);
  }

  async function tickItem(val,task_id){
    
    if(await putTask(val,task_id)) {
      setList(prevList =>{
        const index = prevList.findIndex(item => item._id === task_id)
        prevList[index].check = val;
       
        return [...prevList]
      })
    }
    else{errMsg()}
  }

  async function editItem(editTask,task_id){

    if(await patchTask(editTask, task_id)){
      setList(prevList =>{
        const index = prevList.findIndex(item => item._id === task_id)
        prevList[index].task = editTask;

        return [...prevList]
      })
    }
    else{ 
      errMsg()
      setList(prevList => [...prevList])
    }
  }

  async function removeItem(task_id){
    
    if(await delTask(task_id)){
      setList(prevList =>{
        const index = prevList.findIndex(item => item._id === task_id)
        const latestList = [...prevList];
  
        latestList.splice(index,1);
        return latestList;
      })
    }
    else{errMsg()}
  }

  function errMsg(){
    alert("We can't relay updates to our server. Try again later")
  }
}

export default App;


