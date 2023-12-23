import React, {useState} from "react";
import { HiPlus } from "react-icons/hi";
import {postTask} from "../backend";


function Task(props){
  const [text,setText] = useState("")

  return(
      <div id="task">

        <input id="task-input" 
          type="text" 
          placeholder="Add Task"  
          maxLength="32"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button id="task-btn"
          style={{
            backgroundColor: text && `#${props.user.theme}`,
            pointerEvents: text ? "all" :"none"
            }}
          onClick={addTask}
        >
          <HiPlus color="white" size={35}/>
        </button>

    </div>
  );

  async function addTask(){
    const result = await postTask(text,props.user._id)
    
    if (result) {props.callback(result)}
    else{alert("Server not working. Your task can't be saved")}

    setText("")
  };
};

export default Task;