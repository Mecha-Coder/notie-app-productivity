import React, {useState,useEffect,useContext, useRef} from 'react'
import {appContext} from "../main"
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../style/pomorodo.css'

export default function Pomodoro(){
  const {
      attention,
      timeStatus, setTimeStatus,
      time, setTime,
      workTime, setWorkTime,
      restTime, setRestTime,
      timeId, setTimeId
  } = useContext(appContext)

  const [work, setWork] = useState(workTime) 
  const [rest, setRest] = useState(restTime) 
  const workSliderRef = useRef(null);
  const restSliderRef = useRef(null);
 
  useEffect(()=>{
    if(time<0){
      attention.current.play()
      if      (timeStatus==="Work"){setTime(restTime*60); setTimeStatus("Rest")}
      else if (timeStatus==="Rest"){setTime(workTime*60); setTimeStatus("Work")}
    } 
  },[time,timeStatus,restTime,workTime,setTimeStatus,setTime,attention])

  return(
    <div id="pomodoro">
      <p id="pomo-status">{timeStatus}</p>
      
      <div id="timer"> 
        <p>{`${  String(Math.floor(time/60)).padStart(2,"0")  }:${  String(time-(Math.floor(time/60)*60)).padStart(2,"0")  }`}</p>
        <p>min</p>
      </div>

      <div id="progress">
        <CircularProgressbar value={timeStatus==="Work"? ((time/60) /workTime)*100 : ((time/60) /restTime)*100 } 
          styles={buildStyles({
            pathColor: timeStatus==="Work"?'#00BA00':'#EA2D40',
            trailColor: '#d3d3d3',
          })}
        />
      </div>
      
      <p>Work</p>
      <div id="work" className="range">
        <input
          ref={ workSliderRef}
          type="range"
          max="60" 
          min="5"   
          value={work} 
          onInput={e=>{setWork(e.target.value)}} 
          onMouseLeave={e=>{setWorkTime(e.target.value)}}
          step="5"
        />
        <label className='value'>{work}</label>
      </div>
      
      <p>Rest</p>
      <div id="rest" className="range">
        <input
          ref={restSliderRef}
          type="range"
          max="60" 
          min="5"   
          value={rest} 
          onInput={e=>{const v=e.target.value; setRest(v)}}
          onMouseLeave={e=>{setRestTime(e.target.value)}}
          step="5" 
        />
        <label className='value'>{rest}</label>
      </div>

      <button onClick={handleClick}>{Boolean(timeId)? "Stop":"Start"}</button>
        
    </div>
  );

  function Start(){
    const id = setInterval(()=>{setTime(time=>time-=1)},1000)
    setTimeId(id)
    setTime(workTime*60)
    setTimeStatus("Work")
    workSliderRef.current.disabled = true;
    restSliderRef.current.disabled = true;
  }

  function Stop(){
    clearInterval(timeId)
    setTimeId(null)
    setTime(0)
    setTimeStatus("Off")
    workSliderRef.current.disabled = false;
    restSliderRef.current.disabled = false;
  }

  function handleClick(){
    if(timeId){Stop()}
    else      {Start()}
  }
}