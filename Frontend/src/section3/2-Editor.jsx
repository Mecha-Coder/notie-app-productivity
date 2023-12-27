import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ 'header': 1 }, { 'header': 2 }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ["blockquote", "code-block"],
  ['link','image'],
  ["clean"]
];


function Editor(props) {
  const [editorContent, setEditorContent] = useState(props.note);

  function handleChange(content){
    setEditorContent(content);
    console.log(content);
  }

  return (
    <div className="container">
      <ReactQuill 
        value={editorContent} 
        onChange={handleChange}  
        modules={{ toolbar: toolbarOptions }}
        scrollingContainer= '#scrolling-container'
      />
    
    </div>
  );
}

export default Editor;