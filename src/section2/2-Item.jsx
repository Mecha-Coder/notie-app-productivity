import React, {useState} from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";


function Item(props){
  const [tick, setTick] = useState(false);

  return(
    <div className="item">
        <input className="item-check"
          type="checkbox" 
          style={{accentColor: `${props.theme}`}}
          onChange={(e)=>{setTick(e.target.checked)}}
        />

        <div className="item-name"
          style={{textDecorationLine: tick && "line-through"}}
        >
          {props.task}
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
}

export default Item;