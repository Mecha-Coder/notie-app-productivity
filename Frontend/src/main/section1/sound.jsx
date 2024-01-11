import React, {useContext} from 'react'
import {appContext} from "../main"
import '../../style/sound.css'


export default function Sound(){
  const {
    select, setSelect,
    forest,guitar,space,sunny
  } = useContext(appContext);

  function Stop(){
      
      forest.current.pause();
      forest.current.currentTime = 0;

      guitar.current.pause();
      guitar.current.currentTime = 0;

      space.current.pause();
      space.current.currentTime = 0;

      sunny.current.pause();
      sunny.current.currentTime = 0;
  }

  function Play(music){
    Stop()

    switch (music){
      case "forest" : forest.current.play(); break;
      case "guitar" : guitar.current.play(); break;
      case "space"  : space.current.play(); break;
      case "sunny"  : sunny.current.play(); break;

      default: 
    }
  }
  

  return(
    <div id="sound">

      <div onClick={()=>{setSelect("Off"); Stop()}} 
        className={select==="Off"? "audio-active" : "audio-btn"}>OFF</div>

      <div onClick={()=>{setSelect("Forest"); Play("forest")}} 
        className={select==="Forest"? "audio-active" : "audio-btn"}>Forest</div>

      <div onClick={()=>{setSelect("Guitar"); Play("guitar")}} 
        className={select==="Guitar"? "audio-active" : "audio-btn"}>Guitar</div>

      <div onClick={()=>{setSelect("Space"); Play("space")}} 
        className={select==="Space"? "audio-active" : "audio-btn"}>Space</div>

      <div onClick={()=>{setSelect("Sunny"); Play("sunny")}} 
        className={select==="Sunny"? "audio-active" : "audio-btn"}>Sunny</div>

    </div>
  )
}





