import React from 'react';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import "../style/toggle.css"

// Props" left, click

function Toggle(props){
  return(
    <div id="toggle" style={{left:`${props.left}`}} onClick={props.click}>
      <MdChevronLeft size={30} color="#d3d3d3"/>
      <MdChevronRight size={30} color="#d3d3d3"/>
    </div>
  );
}

export default Toggle;