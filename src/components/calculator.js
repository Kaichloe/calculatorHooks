import React, {useState, useEffect} from "react";

function Calculator(){
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState("result");

  useEffect(() => {}, [operation, firstValue, secondValue]);

  function calculate(){
    if (operation === "/"){
      return (setResult(parseInt(firstValue) / parseInt(secondValue)))
    }else if (operation === "*"){
      return (setResult(parseInt(firstValue) * parseInt(secondValue)))
    } else if (operation === "+"){
      return (setResult(parseInt(firstValue) + parseInt(secondValue)))
    } else if (operation === "-"){
      return (setResult(parseInt(firstValue) - parseInt(secondValue)))
    }
  }

  return (
    <div>
      <input type="number" placeholder="first value" onChange={(e) => setFirstValue(e.target.value)} ></input> 

      <input type="text" placeholder="operation" onChange={(e) => setOperation(e.target.value)}></input>

      <input type="number" placeholder="second value" onChange={(e) => setSecondValue(e.target.value)}></input>

      <button type="submit" onClick={()=> calculate()}>Submit</button>
      
      <div>{result}</div>
    </div>
  )

}




export default Calculator;