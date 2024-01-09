import React,{useRef, useState, useContext} from "react";
import {listContext} from "../main/task"
import "../style/input.css"

// Important Props: value, onChange
// Optional Props : pholder, disable, class
//                width(default: 280px), max(default: 26)

export function MainInput(props){
  const inputRef = useRef(null);

  if(inputRef.current !== null && !props.disable){
    setTimeout(()=>{inputRef.current.focus()},100)
  }

  return(
    <input className={`input ${props.class} `} 
      onBlur={props.blur}
      maxLength={props.max || 26} 
      ref={inputRef}
      value={props.value} 
      disabled={props.disable}
      placeholder={props.pholder}
      onChange={e=>{props.onChange(e.target.value)}}
      style={{width: props.width || "280px"}}
    />
  );

}

//--------------------------------------------------------

// Props: task_id, isDone

export function CheckboxInput(props){
  const setList = useContext(listContext)
  return(
    <input className="checkbox" 
      type="checkbox" 
      checked={props.done}
      onChange={handleChange}
    />
  );

  function handleChange(e){
    const state = e.target.checked;
  
    setList(prevList => {
      const index = prevList.findIndex(item=>item._id===props.task_id)
      const updatedList = [...prevList]

      updatedList[index].done = state
      return updatedList
    })
  }


}

//--------------------------------------------------------

// Important Props: task_id, task, done
// Optional Props : disable


export function TaskInput(props){
  const inputRef = useRef(null);
  const [text, setText] = useState(props.task)
  const setList = useContext(listContext)

  if(props.edit){
    setTimeout(()=>{inputRef.current.focus()},100)
  }
  
  return (
    <input className={`text ${props.edit&&"edit-task"} ${props.done&&"done-task"}`} 
      onBlur={handleBlur}
      ref={inputRef}
      type="text" 
      disabled={!props.edit}
      maxLength={28}
      value={text}
      onChange={e => {setText(e.target.value)}}
    /> 
  );

  function handleBlur(){
    if (props.task !== text){
      setList(prevList => {
      const index = prevList.findIndex(item=>item._id===props.task_id)
      const updatedList = [...prevList]

      updatedList[index].task = text
      return updatedList
    })
    }
    props.blur()
  }
}