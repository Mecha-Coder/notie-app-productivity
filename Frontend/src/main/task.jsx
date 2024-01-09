import React , {useState, createContext} from "react";
import Add from "./section2/add"
import Item from "./section2/item"
import Date from "../reuse/date"
import '../style/task.css'

export const listContext = createContext();

let task = [
  {_id:"m834901", task:"Wash plates", done:false},
  {_id:"m834902", task:"Hang cloths", done:false},
  {_id:"m834903", task:"Buy grocery", done:true},
  {_id:"m834904", task:"Wash plates", done:false},
  {_id:"m834905", task:"MM MMM 678 890 89000000", done:true},
  {_id:"m834906", task:"Helo", done:false}
]

function Task(){
  const [list, setList] = useState(task)
  
  return(
    <listContext.Provider value={setList}>
      <div id="task">
        <Date />
        <Add />
        <div id="list">{list.map(generateList)}</div>
      </div>
    </listContext.Provider>
  );
  
  function generateList(item){
    return (
      <Item 
        key={item._id} 
        task_id={item._id}
        task={item.task} 
        done={item.done}
      />
    );
  }
}

export default Task;