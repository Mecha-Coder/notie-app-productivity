import React from 'react'
import { VscTriangleDown } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";


 function Select(props) {
  
  function DisplayNote(){
  return (
    <div id="note-name-display">
      {props.title}
    </div>
  );
  }

  function EditNote(){
    return(
      <input id="note-name-edit"
        autoFocus
        maxLength={32}
        value="2014-03-26 | Physicl Class #12"
      />
    );
  }

  function SelectNote(){
    return(
      <button id="select-btn">
      <VscTriangleDown size={32}/>
    </button>
    )
    
  }

  function EditBtn(){
    return(
      <button className={`item-btn edit`}
      >
        <MdEdit size={20} color="white"/>
      </button>
    );
  }

  function EditOkBtn(){
    return(
      <button className="item-btn theme"
      >
        <FaCheck size={20} color="white"/>
      </button>
    );
  }

  function DeleteBtn(){
    return(
      <button className="item-btn delete"
      >
        <RiDeleteBin5Line size={20} color="white"/>
      </button>
    );
  }


  return (
    <div id="select">
      <button id="new-note-btn">New Note</button>
      
      <div id="select-container">
        {false? <EditNote/> : <DisplayNote/>}
        <SelectNote/>
      </div>

      <EditBtn />
      <EditOkBtn />
      <DeleteBtn />

    </div>
  )
}

export default Select;