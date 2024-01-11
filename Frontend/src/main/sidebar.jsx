import React, {useState, useContext}from "react";
import Profile from "./section1/profile";
import Menu from "./section1/menu";
import { IoSettings } from "react-icons/io5";
import { RiShutDownLine } from "react-icons/ri";
import { AiFillSound } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import Overlay from './section1/overlay'
import {appContext} from  "./main"
import '../style/sidebar.css';

function Sidebar(){
  const [overlay, setOverlay] = useState(0)
  const {select, timeStatus, time} = useContext(appContext);

  function clickSetting()   {window.location.href = '/configure'}
  function clickClose()     {setOverlay(0)}
  function clickSound()     {setOverlay(1)}
  function clickCalculator(){setOverlay(2)}
  function clickPomo()      {setOverlay(3)}
  function clickLogout()    {window.location.href = '/'}

  return(
    <div id="sidebar">

      {Boolean(overlay) && <Overlay show={overlay} close={clickClose}/>}

      <Profile />
      <Menu icon={<IoSettings size={30}/>} name="Setting" class="divider" click={clickSetting}/>
      
      <p>Utility</p>
      <Menu icon={<AiFillSound  size={30}/>} name="Ambient Sound" more={select==="Off"? "Off" : `Playing ${select}`}  click={clickSound}/>
      <Menu icon={<FaCalculator size={30}/>} name="Calculator"  click={clickCalculator}/>
      <Menu icon={<MdTimer size={30}/>} name="Pomodoro" class="divider"  click={clickPomo}
        more={timeStatus==="Off"? "Off": `${timeStatus}: ${Math.floor((time+60)/60)} min left`}
      />

      <p></p>
      <Menu icon={<RiShutDownLine  size={30}/>} name="Log out" click={clickLogout}/>
    </div>
  );
}

export default Sidebar;





