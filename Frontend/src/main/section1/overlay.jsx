import React, {useState} from 'react'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../style/overlay.css'
import '../../style/pomorodo.css'
import '../../style/calculator.css'
import '../../style/sound.css'

function Overlay(props) {
  return (
    <div id="sidebar-overlay">
      <div id="close" onClick={()=>{props.close()}}>&#10006;</div>
      
      {props.show===1 && <Sound />}
      {props.show===2 && <Calculator />}
      {props.show===3 && <Pomodoro />}
    </div>
  )
}

export default Overlay;


function Sound(){
  return(
    <div id="sound">
      <div className="audio-btn audio-active">OFF</div>
      <div className="audio-btn">Forest</div>
      <div className="audio-btn">Guitar</div>
      <div className="audio-btn">Space</div>
      <div className="audio-btn">Sunny</div>
    </div>
  )
}

function Calculator(){
  return(
    <div id="calculator">
      
      <div id="calculate">5&times;34&minus;5<br/>55<br/>55<br/>55<br/></div>
      <div id="result">210</div>

      <div id="pad-layout">
        <div className="pad">7</div>
        <div className="pad">8</div>
        <div className="pad">9</div>
        <div className="pad xxl blue">&times;</div>
        <div className="pad">4</div>
        <div className="pad">5</div>
        <div className="pad">6</div>
        <div className="pad xxl blue">&divide;</div>
        <div className="pad">1</div>
        <div className="pad">2</div>
        <div className="pad">3</div>
        <div className="pad xxl blue">&#43;</div>
        <div className="pad">( )</div>
        <div className="pad">0</div>
        <div className="pad xxl">	&sdot;</div>
        <div className="pad xxl blue">&minus;</div>
        <div className="pad xxl red">C</div>
        <div className="pad xxl">&plusmn;</div>
        <div className="pad xxl equl-sign">&#61;</div>
      </div>
    </div>
  );
}

function Pomodoro(){
  const [work, setWork] = useState("0")
  const [rest, setRest] = useState("10")
  return(
    <div id="pomodoro">
      <p id="pomo-status">OFF</p>
      
      <div id="timer"> 
        <p>00:00</p>
        <p>min</p>
      </div>

      <div id="progress">
        <CircularProgressbar value={work} 
          maxValue={60} 
          minValue={10}
          styles={buildStyles({
            pathColor: `#00BA00`,
            trailColor: '#d3d3d3',
          })}
        />
      </div>
      
      <p>Work</p>
      <div id="work" className="range">
        <input
          type="range"
          max="60" 
          min="10"   
          value={work} 
          onChange={e=>{setWork(e.target.value)}} 
          step="5"
        />
        <label className='value'>{work}</label>
      </div>
      
      <p>Rest</p>
      <div id="rest" className="range">
        <input
          type="range"
          max="60" 
          min="10"   
          value={rest} 
          onInput={e=>{setRest(e.target.value)}} 
          step="5" 
        />
        <label className='value'>{rest}</label>
      </div>

      <button>Start</button>
        
    </div>
  );
}

