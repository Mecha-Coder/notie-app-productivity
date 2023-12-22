import React, {useState} from "react";
import { HiPlus } from "react-icons/hi";

function Task(props){
  const [text,setText] = useState("")

  return(
      <form id="task">

        <input id="task-input" 
          type="text" 
          placeholder="Add Task"  
          maxLength="32"
          style={{borderColor:`${props.theme}`}}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button id="task-btn"
          type="submit"
          style={{
            backgroundColor: text && `${props.theme}`,
            pointerEvents: text ? "all" :"none"
            }}
        >
          <HiPlus color="white" size={35}/>
        </button>

    </form>
  );
}

export default Task;