import React from "react"
import moment from 'moment'
import "../style/date.css"

export default function Date(){
  return <div id="date">{moment().format("ddd, Do MMM YY")}</div>
}