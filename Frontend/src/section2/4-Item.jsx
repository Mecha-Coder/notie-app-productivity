import React, {useState} from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Item(props){
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(props.data.task);
  

  function CheckBox(){
    return(
      <input className={`item-check ${edit && "hide"}`}
        type="checkbox" 
        onChange={(e)=> {props.tick(e.target.checked,props.data._id)}}
        checked={props.data.check}
      />
    );
  }

  function TaskName(){
    return(
      <div className="item-name"
        style={{textDecorationLine: props.data.check && "line-through"}}
      >
        {props.data.task}
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
      <button className={`item-btn edit ${props.data.check && "hide"}`}
        onClick={()=>{setEdit(true)}}
      >
        <MdEdit size={20} color="white"/>
      </button>
    );
  }

  function DeleteBtn(){
    return(
      <button className="item-btn delete"
        onClick={()=>{props.remove(props.data._id)}}
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

 
function updateTask(){
    setEdit(false)

    if (props.data.task !== editText){
      props.edit(editText, props.data._id)   
    }
  }
};

export default Item;