import React, {useState, useContext} from 'react'
import {CheckboxInput, TaskInput} from "../../reuse/input"
import {OkBtn} from "../../reuse/button"
import OptionX from './optionX'
import {listContext} from "../task"
import "../../style/item.css"

// Props: task_id, name, check, 

function Item(props) {
  const setList = useContext(listContext)
  const[isEdit, setIsEdit] = useState(false) // Edit mode


  return (    
    <div className='item'>
      
      {isEdit || <CheckboxInput task_id={props.task_id} done={props.done}/>}

      <TaskInput task_id={props.task_id} task={props.task} done={props.done} edit={isEdit} blur={()=>{setIsEdit(false)}}/>
      
      {isEdit || <OptionX done={props.done} delete={deleteTask} editMode={()=>{setIsEdit(true)}}/>}
      {isEdit && <OkBtn size={20} />}
    </div>
  );

  function deleteTask(){
    setList(prevList=>{
      const index = prevList.findIndex(item=>item._id===props.task_id)
      const updatedList = [...prevList]

      updatedList.splice(index,1)
      return updatedList
    })
  }
}

export default Item;