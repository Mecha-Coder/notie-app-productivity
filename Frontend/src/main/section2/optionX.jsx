import React, {useState} from 'react'
import {OptionBtn, DropLeftBtn, EditBtn, DeleteBtn} from "../../reuse/button"
import "../../style/optionX.css"

// Props: editMode, delete

function OptionX(props) {
  const [expand, isExpand] = useState(false)

  function expandYes(){isExpand(true)}
  function expandNo(){isExpand(false)}

  return (
    <div className="optionX" onBlur={expandNo} tabIndex="0">
      {expand || <OptionBtn size={20} class="trim"    click={expandYes} />}
      {expand && !props.done && <EditBtn size={20}    click={props.editMode}/>}
      {expand && <DeleteBtn size={20}                 click={props.delete}/>}
      {expand && <DropLeftBtn size={20} class="trim"  click={expandNo} />}
    </div>
  )
}

export default OptionX