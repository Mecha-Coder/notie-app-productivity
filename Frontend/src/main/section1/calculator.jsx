import React, {useState} from 'react'
import * as math from 'mathjs';
import '../../style/calculator.css'

export default function Calculator(){
  const [display, setDisplay] = useState("");
  const [compute, setCompute] = useState("")
  const [result, setResult] = useState("");
  const [equal, setEqual] = useState(false)

  return(
    <div id="calculator">
      <div id="calculate" className={equal? "answer":""}>{display}</div>
      <div id="result">{result}</div>

      <div id="pad-layout">
        <div className="pad"           onClick={()=>{Compute("7")}}>7</div>
        <div className="pad"           onClick={()=>{Compute("8")}}>8</div>
        <div className="pad"           onClick={()=>{Compute("9")}}>9</div>
        <div className="pad xxl blue"  onClick={()=>{Compute("×")}}>×</div>
        <div className="pad"           onClick={()=>{Compute("4")}}>4</div>
        <div className="pad"           onClick={()=>{Compute("5")}}>5</div>
        <div className="pad"           onClick={()=>{Compute("6")}}>6</div>
        <div className="pad xxl blue"  onClick={()=>{Compute("÷")}}>÷</div>
        <div className="pad"           onClick={()=>{Compute("1")}}>1</div>
        <div className="pad"           onClick={()=>{Compute("2")}}>2</div>
        <div className="pad"           onClick={()=>{Compute("3")}}>3</div>
        <div className="pad xxl blue"  onClick={()=>{Compute("+")}}>+</div>
        <div className="pad"           onClick={()=>{Compute("(")}}>(</div>
        <div className="pad"           onClick={()=>{Compute(")")}}>)</div>
        <div className="pad"           onClick={()=>{Compute("0")}}>0</div>
        <div className="pad xxl blue"  onClick={()=>{Compute("−")}}>−</div>
        <div className="pad xxl red"   onClick={()=>{clickClear()}}>C</div>
        <div className="pad xxl"       onClick={()=>{Compute("-")}}>&plusmn;</div>
        <div className="pad xxl"       onClick={()=>{Compute(".")}}>&sdot;</div>
        <div className="pad xxl blue"  onClick={()=>{clickEqual()}}>&#61;</div>
      </div>
    </div>
  );

  function Compute(value){

    if(equal) {
      setDisplay(value)
    } else {
      const newDisplay=display+value; setDisplay(newDisplay);
    }
    
    setEqual(false)
    let newCompute;

    switch (value){
      case "×": newCompute=compute+"*" ; setCompute(newCompute); break;
      case "÷": newCompute=compute+"/" ; setCompute(newCompute); break;
      case "−": newCompute=compute+"-" ; setCompute(newCompute); break;

      default : newCompute=compute+value ; setCompute(newCompute);
    }
      try{
        setResult(math.evaluate(newCompute))
      } catch {
        setResult("")
      }
  }

  function clickEqual(){
    const answer = result || "Invalid Math"
    setDisplay(answer)

    setEqual(true)
    setCompute("")
    setResult("")
  }

  function clickClear(){
    if(equal){setDisplay("")}
    else{
      const newDisplay=display.slice(0, -1); setDisplay(newDisplay)
      const newCompute=compute.slice(0, -1); setCompute(newCompute)

      try{
        setResult(math.evaluate(newCompute))
      } catch {
        setResult("")
      }
    }
  }
}