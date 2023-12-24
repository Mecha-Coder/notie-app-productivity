import React, {useState} from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import {putTask, patchTask, delTask} from "../backend";


function Item(props){
  const [tick, setTick] = useState(props.data.check);
  const [edit, setEdit] = useState(false);
  const [displayText, setdisplayText] = useState(props.data.task);
  const [editText, setEditText] = useState(props.data.task);
  

  function CheckBox(){
    return(
      <input className={`item-check ${edit && "hide"}`}
        type="checkbox" 
        onChange={checkTask}
        checked={tick}
      />
    );
  }

  function TaskName(){
    return(
      <div className="item-name"
        style={{textDecorationLine: tick && "line-through"}}
      >
        {displayText}
      </div>
    );
  }

  function EditTask(){
    return(
      <input className="item-edit-name"
        autoFocus
        onBlur={updateTask}
        type="text"
        maxLength="32"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
    );
  }

  function EditBtn(){
    return(
      <button className={`item-btn edit ${tick && "hide"}`}
        onClick={()=>{setEdit(true)}}
      >
        <MdEdit size={20} color="white"/>
      </button>
    );
  }

  function DeleteBtn(){
    return(
      <button className="item-btn delete"
        onClick={deleteTask}
      >
        <RiDeleteBin5Line size={20} color="white"/>
      </button>
    );
  }

  function EditOkBtn(){
    return(
      <button className="item-btn theme"
      onClick={updateTask}
      >
        <FaCheck size={20} color="white"/>
      </button>
    );
  }

  return(
    <div className="item">
      <CheckBox/>
      {edit? <EditTask/>:<TaskName/>}
      {edit? <EditOkBtn/>:<EditBtn/>}
      {edit || <DeleteBtn/>}
    </div>
  );

  async function checkTask(e){
    
    const val = e.target.checked;
    if(await putTask(val,props.data._id))  {setTick(val)}
    else{alert("We can't relay updates to our server. Try again later")}
  }

  async function updateTask(){

    if (displayText !== editText){

      if(await patchTask(editText, props.data._id)){
        setdisplayText(editText)
      }
      else{
        setEditText(displayText)
        alert("We can't relay updates to our server. Try again later")
      }
      
    }
    setEdit(false)
  }

  async function deleteTask(){
    const task_id=props.data._id

    if(await delTask(task_id)){
      props.callback(task_id)
    }
    else{
      alert("We can't relay updates to our server. Try again later")
    }
  }
};

export default Item;