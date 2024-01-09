import React, {useState, useContext} from 'react';
import {noteContext} from "../note"
import {EditBtn,DeleteBtn,AddBtn,DropDownBtn,OptionBtn} from '../../reuse/button'
import "../../style/optionY.css"

let id=0;

function OptionY(){
  const {
    data, setData,
    currentId,setCurrentId,
    setCurrentTitle,
    setCurrentContent,
    setEditMode,
    setNoteIndex
  
  } = useContext(noteContext)
  const [expand, isExpand] = useState(false)

  function expandYes(){isExpand(true)}
  function expandNo(){isExpand(false)}
  function editMode(){isExpand(false);setEditMode(true)}
  
  return (
    <div id="optionY" onBlur={expandNo} tabIndex="0">
      {expand || <OptionBtn              click={expandYes}/>}
      {expand && <DropDownBtn            click={expandNo}/>}
      {expand && currentId && <EditBtn   click={editMode}/>}
      {expand && currentId && <DeleteBtn click={deleteNote} />}
      {expand && <AddBtn                 click={addNote}/>}
    </div> 
  );

  function deleteNote(){
    isExpand(false)
    
    const index = data.findIndex(item=>item._id===currentId)
 
    if(index>-1){
      let updataData = [...data]
      updataData.splice(index,1)
      setData(updataData)
  
      setNoteIndex(updataData.map(item=> {return {_id: item._id, title: item.title} }))   
      setCurrentId("")
      setCurrentTitle("")
      setCurrentContent("")
    } else {alert("No notes to delete")}
   
  }

  function addNote(){
    isExpand(false)
    const dummyId = id++

    const newNote = {
      _id: `XX-${dummyId}`,
      title: `New Note ${dummyId}`,
      content:"<p>Write your notes here...</p>"
    }

    const updateData = [newNote,...data]

    setData(updateData)
    setCurrentId(newNote._id)
    setCurrentTitle(newNote.title)
    setCurrentContent(newNote.content)
    setNoteIndex(updateData.map(item=> {return {_id: item._id, title: item.title} }))   
  }
}

export default OptionY;