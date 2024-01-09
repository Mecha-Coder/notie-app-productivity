import React, {useContext} from "react";
import {noteContext} from "../note"
import '../../style/search.css'


function Search(props){
    const {
    data,
    setCurrentId,
    setCurrentTitle, 
    setCurrentContent,
    noteIndex
    } = useContext(noteContext)

  function changeNote(note_id){
    const selectedNote = data.find(item=>item._id===note_id)
    
    setCurrentId(selectedNote._id)
    setCurrentTitle(selectedNote.title)
    setTimeout(()=>{setCurrentContent(selectedNote.content)},70)
    props.collapse()
  }

  return(
    <div id="search">
      <div id="search-list">
        {noteIndex.map(generateList)}
      </div>
    </div>
  );

  function generateList(item){
    return(
      <div className="search-item" key={item._id} onClick={()=>{changeNote(item._id)}}>
        {item.title}
      </div>
    );
  }
}


export default Search;
