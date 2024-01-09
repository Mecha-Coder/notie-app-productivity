import React, {useState, useContext} from "react";
import {listContext} from "../task"
import {MainInput} from "../../reuse/input"
import {AddBtn2} from "../../reuse/button"
import "../../style/add.css"

let id=0;

function Add(){
  const setList = useContext(listContext)
  const [text, setText] = useState("")
 
  return(
    <div id="add">
      <div id="add-box">

        <MainInput pholder="Add task" value={text} onChange={setText} />
        {text && <AddBtn2 class="float" click={handleClick} disable={false}/>}
        
      </div>
    </div>
  );

  function handleClick(){
    setList(prevList => [...prevList,{
      _id:id++,
      task:text,
      done: false
    }])
    setText("")
  }


}

export default Add;