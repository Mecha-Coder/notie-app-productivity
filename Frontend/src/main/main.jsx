import React, {useState, useEffect} from 'react';
import Sidebar from './sidebar';
import Task from "./task";
import Note from "./note";
import Toggle from './toggle'
import '../style/main.css'

function Main(){
  const [sidebar, setSideBar] = useState(window.innerWidth < 1450? true:false)
  useEffect(handleResize,[])

  return(
    <div id="main">
      <Toggle left={sidebar? "-8px":"38px"} click={handleSideBar}/>
      
      {!sidebar && <div id="cover"></div>}
      {!sidebar && <Sidebar />}
    
      <Task/>
      <Note/>
    </div>
  );

  function handleSideBar(){
    setSideBar(value=>!value)
  }

  function handleResize(){
    window.addEventListener("resize",()=>{
      if(window.innerWidth < 1450){setSideBar(true)}
      else (setSideBar(false))
    })
  }
}

export default Main;