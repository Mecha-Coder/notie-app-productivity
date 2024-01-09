import React, {useState} from 'react'
import "../style/button.css"

import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";

// Props: size(default: 25) ,click, class

export function DropLeftBtn(props){
  const [state, isHover] = useState(false)
  return(
    <div className={`btn ${props.class}`} onClick={props.click} 
      onMouseEnter={()=>{isHover(true)}}
      onMouseLeave={()=>{isHover(false)}}
    >
      <HiChevronLeft color={state? "black":"#d3d3d3"} size={props.size || 25}/>
    </div>
  );
}

export function DropDownBtn(props){
  const [state, isHover] = useState(false)
  return(
    <div className={`btn ${props.class}`} onClick={props.click} 
      onMouseEnter={()=>{isHover(true)}}
      onMouseLeave={()=>{isHover(false)}}
    >
      <HiChevronDown color={state? "black":"#d3d3d3"} size={props.size || 25}/>
    </div>
  );
}

export function OptionBtn(props){
  const [state, isHover] = useState(false)
  return(
    <div className={`btn ${props.class}`} onClick={props.click}
      onMouseEnter={()=>{isHover(true)}}
      onMouseLeave={()=>{isHover(false)}}
    >
      <FaEllipsisVertical color={state? "black":"#d3d3d3"} size={props.size || 25}/>
    </div>
  );
}

export function EditBtn(props) {
  return (
    <div className="btn hover edit" onClick={props.click}>
      <MdEdit color="white" size={props.size || 25}/>
    </div>
  );
}

export function DeleteBtn(props) {
  return (
    <div className="btn hover delete" onClick={props.click}>
      <RiDeleteBin5Line color="white" size={props.size || 25} />
    </div>
  );
}

export function AddBtn(props) {
  return (
    <div className="btn hover add" onClick={props.click}>
      <FaPlus color="white" size={props.size || 25} />
    </div>
  );
}

export function AddBtn2(props){
  const [state, isHover] = useState(false)
  return(
    <div className={`btn ${props.class}`} onClick={props.click} 
      onMouseEnter={()=>{isHover(true)}}
      onMouseLeave={()=>{isHover(false)}}
    >
      <FaPlus color={state? "black":"#d3d3d3"} size={props.size || 25}/>
    </div>
  );
}

export function OkBtn(props){
  return (
    <div className="btn hover ok" onClick={props.click}>
      <FaCheck color="white" size={props.size || 25} />
    </div>
  );
}

export function OkBtn2(props){
  return(
    <div className={`btn hover ok ${props.class}`} onClick={props.click}>
      <FaCheck color="white" size={props.size || 25}/>
    </div>
  );
}