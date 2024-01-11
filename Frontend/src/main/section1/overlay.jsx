import React from 'react'
import '../../style/overlay.css'
import Sound from "./sound"
import Calculator from "./calculator"
import Pomodoro from "./pomodoro"


export default function Overlay(props) {
  return (
    <div id="sidebar-overlay">
      <div id="close" onClick={()=>{props.close()}}>&#10006;</div>
      
      {props.show===1 && <Sound />}
      {props.show===2 && <Calculator />}
      {props.show===3 && <Pomodoro />}
    </div>
  )
}

 








