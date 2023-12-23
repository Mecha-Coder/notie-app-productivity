import React from "react";
import moment from "moment";

const today = moment().format('ddd, Do MMM');

function Date(){
  return(
    <div id='date-today'>{today}</div>
  );
}

export default Date;