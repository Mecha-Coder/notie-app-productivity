import React, {useState} from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import {putTask} from "../backend";


function Item(props){
  const [tick, setTick] = useState(props.data.check);

  return(
    <div className="item">
        <input className="item-check"
          type="checkbox" 
          onChange={checkTask}
          checked={tick}
        />

        <div className="item-name"
          style={{textDecorationLine: tick && "line-through"}}
        >
          {props.data.task}
        </div>
      
        <button className={`item-btn ${!tick && "edit"}`}
          style={{pointerEvents: !tick ? "all" :"none"}}
        >
          <MdEdit size={20} color="white"/>
        </button>
        
        <button className="item-btn delete">
          <RiDeleteBin5Line size={20} color="white"/>
        </button>
    </div>
  );

  async function checkTask(e){
    
    const val = e.target.checked;

    if(await putTask(val,props.data._id))  {setTick(val)}
    
    else{alert("We can't relay updates to our server. Try again latere")}
  }
}

export default Item;