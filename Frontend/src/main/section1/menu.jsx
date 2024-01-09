import React from "react"
import '../../style/menu.css'

//Prop - icon, name, class, more, click

function Menu(props){
  return(
    <div className={`menu ${props.class}`}>
      
      <div className="menu-box" onClick={props.click}>
        {props.icon}

        <div className="menu-detail"> 
          <div>{props.name}</div>
          <div className="extra-detail">{props.more}</div>
        </div> 

      </div>
    </div>
  );
}

export default Menu;