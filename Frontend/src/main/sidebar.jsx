import React, {useState}from "react";
import {useNavigate} from "react-router-dom"
import Profile from "./section1/profile";
import Menu from "./section1/menu";
import { IoSettings } from "react-icons/io5";
import { RiShutDownLine } from "react-icons/ri";
import { AiFillSound } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import Overlay from './section1/overlay'
import '../style/sidebar.css';

function Sidebar(){
  const backToHome = useNavigate();
  const [overlay, setOverlay] = useState(0)

  function clickClose()     {setOverlay(0)}
  function clickSound()     {setOverlay(1)}
  function clickCalculator(){setOverlay(2)}
  function clickPomo()      {setOverlay(3)}
  function clickLogout()    {backToHome("/")}

  return(
    <div id="sidebar">

      {Boolean(overlay) && <Overlay show={overlay} close={clickClose}/>}

      <Profile />
      <Menu icon={<IoSettings size={30}/>} name="Setting" class="divider"/>
      
      <p>Utility</p>
      <Menu icon={<AiFillSound  size={30}/>} name="Ambient Sound" more="Off"  click={clickSound}/>
      <Menu icon={<FaCalculator size={30}/>} name="Calculator"  click={clickCalculator}/>
      <Menu icon={<MdTimer size={30}/>} name="Pomodoro" class="divider" more="Off"  click={clickPomo}/>

      <p></p>
      <Menu icon={<RiShutDownLine  size={30}/>} name="Log out" click={clickLogout}/>
    </div>
  );
}

export default Sidebar;





