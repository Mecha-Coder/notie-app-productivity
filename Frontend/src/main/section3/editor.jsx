import React, {useContext} from "react";
import {noteContext} from "../note"
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../style/editor.css"

const fontSizes = [
  '11pt','12pt','14pt','16pt','18pt',
  '20pt','22pt','24pt','28pt','32pt',
  '36pt','40pt','60pt'
];

var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizes;
Quill.register(Size, true);

const modules = {toolbar : [
  [{ 'size': fontSizes }],
  ["bold", "italic", "underline", "strike"],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ["blockquote", "code-block"],
  ]
}

let timerID

function Editor(){
  
  const {
    data, setData,
    currentId,
    currentContent, setCurrentContent, 
  } = useContext(noteContext)

  return (
    <ReactQuill 
      modules={modules} 
      theme="snow" 
      value={currentContent} 
      onChange={handleChange} 
      readOnly={!currentId}
    />
  );

  function handleChange(value){
    setCurrentContent(value)

    if(timerID){clearTimeout(timerID)}
    timerID = setTimeout(()=>{
      const index = data.findIndex(item=>item._id===currentId)
    
      if(index>-1){
        let updataData = [...data]
        updataData[index].content = value
        setData(updataData)
      } else {alert("Something when wrong")}

    },500)
  }
}

export default Editor;



