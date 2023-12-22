import React from "react";
import moment from "moment";
import Profile from "./section1/1-Profile";
import Task from "./section2/1-Task";
import Item from "./section2/2-Item";

const today = moment().format('ddd, Do MMM'); 
const user = {
  name: "Desmond",
  theme : "#0F6ED9"
}

function App() {
  return (
    <div id="main">
      
      <div id="section1">
        <Profile name={user.name}/>
      </div>

      <div id="section2"> 
        <div id='date-today'>{today}</div>

        <Task theme={user.theme}/>

        <div id="list">
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Make cake" />
          <Item theme={user.theme} task="Run" />
          <Item theme={user.theme} task="Kick People" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Laugh" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Wash Cloth" />
          <Item theme={user.theme} task="Laugh" />
        </div>
      </div>

      <div id="section3">
       Section 3
      </div>

    </div>
  );
}

export default App;