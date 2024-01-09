import React, {useState, useContext} from "react";
import {DropDownBtn, OkBtn2} from "../../reuse/button"
import {MainInput} from "../../reuse/input"
import Search from './search'
import {noteContext} from "../note"
import "../../style/title.css";


function Title(){  
  const {
    data, setData,
    currentId,
    editMode, setEditMode,
    currentTitle, setCurrentTitle, 
    setNoteIndex
    } = useContext(noteContext)
  const [expand, setExpand] = useState(false)

  function toggleExpand(){setExpand(value=>!value)}
  function expandNo(){setExpand(false)}
  
  return (
    <div id="title" >
      <div id="title-box" onBlur={expandNo} tabIndex="0">

        <MainInput value={currentTitle} onChange={setCurrentTitle} 
          class={`bold ${editMode && "edit-title"}`}
          blur={editNoteTitle}
          disable={!editMode} 
        />

        {editMode || <DropDownBtn class="float" click={toggleExpand} />}
        {editMode && <OkBtn2 class="float-ok"/>}
        {expand   && <Search collapse={expandNo}/>}
      </div>
    </div>
  );

  function editNoteTitle(){
    const index = data.findIndex(item=>item._id===currentId)
    
    if(index>-1){
      let updataData = [...data]
      updataData[index].title = currentTitle
      setData(updataData)
      setNoteIndex(data.map(item=> {return {_id: item._id, title: item.title} })) 
    } else {alert("Something when wrong")}
    
    setEditMode(false)
  }
}

export default Title;