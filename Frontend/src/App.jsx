import React, {useState} from "react";
import Profile from "./section1/1-Profile";
import Date from "./section2/1-Date";
import Task from "./section2/2-Task";
import List from "./section2/3-List"
import {getUser} from "./backend"

const data = await getUser("Matthew");

function App() {
  const [list, setList] = useState(data.task);

  function Section1(){
    return(
      <div id="section1">
        <Profile user={data.user}/>
      </div>
    );
  }

  function Section2(){
    return(
      <div id="section2"> 
        <Date />
        <Task user={data.user} callback={updataList}/>
        <List task={list} />
      </div>
    );
  }
  
  function Section3(){
    return(
      <div id="section3">
         Section 3
      </div>
    );
  }

  if(data){
    
    if(data.user){
      document.querySelector("body").setAttribute("class",`theme-${data.user.theme}`)
      return <div id="main"><Section1/><Section2/><Section3/></div>
    }
      else{return <h1>User not found</h1>}

  } 
  else{ return <h1>Can't get data from server</h1> }

  function updataList(object){
    setList(prevList => [...prevList,object]);
  }
}

export default App;

