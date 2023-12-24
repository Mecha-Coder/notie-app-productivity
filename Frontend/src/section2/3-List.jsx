import React from "react";
import Item from "./4-Item";

function List(props){
  
  return (
    <div id="list">
      {props.task.map(generateList)}
    </div>
  );

  function generateList(item){
    return (
    <Item  
      key={item._id} 
      data={item} 
      tick={props.tick}
      edit={props.edit} 
      remove={props.remove}
    />
    );
  }
}

export default List;