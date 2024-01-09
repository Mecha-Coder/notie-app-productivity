import React, {useState,createContext} from "react";
import Title from "./section3/title"
import Editor from "./section3/editor"
import OptionY from "./section3/optionY"
import '../style/note.css'

export const noteContext = createContext();

let database=[
  {_id:"mx01", title:"Ratatulli", content:"<p>hahahahahah</p>"},
  {_id:"mx02", title:"Physic 101", content:"<p></p>"},
  {_id:"mx03", title:"How to make cake",content:"<p></p>"},
  {_id:"mx04", title:"Rat Race",content:"<p></p>"},
  {_id:"mx05", title:"Pasta Recipe", content:"<p></p>"},
  {_id:"mx06", title:"Halopenio", content:"<p></p>"},
  {_id:"mx07", title:"Hot to make Robot",content:"<p></p>"},
  {_id:"mx08", title:"2014-03-23 | Physic Lecture @",content:"<p></p>"}
]

function Note(){
  const [data, setData] = useState(database)

  const [currentId, setCurrentId] = useState(database[1]._id)
  const [currentTitle, setCurrentTitle] = useState(database[1].title)
  const [currentContent, setCurrentContent] = useState(database[1].content)

  const [editMode, setEditMode] = useState(false)
  const [noteIndex, setNoteIndex] = useState(database.map(item=> {return {_id: item._id, title: item.title} }))

  return(
    <noteContext.Provider value={{
      data, setData,
      currentId, setCurrentId,
      currentTitle, setCurrentTitle, 
      currentContent, setCurrentContent, 
      editMode, setEditMode,
      noteIndex,setNoteIndex
      }}
    >

    <div id="note">
      <Title />
      <OptionY />
      <Editor/>
      {Boolean(currentId) || <div id="cover-editor"></div>}
    </div>
    
    </noteContext.Provider>
  );

}

export default Note;