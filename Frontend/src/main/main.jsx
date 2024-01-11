import React, {useState, useEffect, useRef ,createContext} from 'react';
import Sidebar from './sidebar';
import Task from "./task";
import Note from "./note";
import Toggle from './toggle'
import '../style/main.css'

export const appContext = createContext();

function Main(){
  const [sidebar, setSideBar] = useState(window.innerWidth < 1450? true:false)

  // Sound State
  const [select, setSelect] = useState("Off")
  const forest = useRef(new Audio(`./sound/forest.mp3`)) ; forest.current.loop = true;
  const guitar = useRef(new Audio(`./sound/guitar.mp3`)) ;  guitar.current.loop = true;
  const space = useRef(new Audio(`./sound/space.mp3`))   ; space.current.loop = true;
  const sunny = useRef(new Audio(`./sound/sunny.mp3`))   ; sunny.current.loop = true;
  const attention = useRef(new Audio(`./sound/attention.mp3`)) 
  
  // Pomodoro State
  const [timeStatus, setTimeStatus] = useState("Off");
  const [time, setTime]             = useState(0);
  const [workTime, setWorkTime]     = useState("45");
  const [restTime, setRestTime]     = useState("10");
  const [timeId, setTimeId]         = useState(null);

  useEffect(handleResize,[])
  
  return(
    <div id="main">
      <Toggle left={sidebar? "-8px":"38px"} click={handleSideBar}/>
      
      <appContext.Provider value={{
      select, setSelect,
      forest,guitar,space,sunny,attention,
      timeStatus, setTimeStatus,
      time, setTime,
      workTime, setWorkTime,
      restTime, setRestTime,
      timeId, setTimeId
    }}>
      {!sidebar && <div id="cover"></div>}
      {!sidebar && <Sidebar />}
      </appContext.Provider>

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