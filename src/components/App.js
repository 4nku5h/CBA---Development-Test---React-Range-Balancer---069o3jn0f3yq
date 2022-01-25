
import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [int,setInt]=useState(50);
  const [val_1,setVal1]=useState(0);
  const [val_2,setVal2]=useState(50);
  
  const ref_1=useRef(null);
  const ref_2=useRef(null);



  function handleChange1(e){
    let a=e.target.value
    console.log(a)
    setVal1(a)
    changeMaxForSecond(a)
  }

  function handleChange2(e){
    let a=e.target.value
    console.log(a)
    setVal2(a)
    changeMaxForFirst(a)
     
     //

  }
  function cha(e){
    
    let max=e.target.value
    setInt(max)
    setVal2(max)
    setVal1(0)
    changeMaxForFirst(max)
  }
  function changeMaxForSecond(curr){
    
    console.log(val_1+ "kshfajkbf")
    ref_2.current.max=int-curr;

  }
  function changeMaxForFirst(curr){
    ref_1.current.max=int-curr;
  }
  return (
    <>
      <div id="max-sum-holder">
        <h2>Input max Sum:-</h2>
        <input type="text" placeholder={50} onChange={cha}></input>
      </div>
      <div id="range-a-holder">
        <input type="range" min="0" max={0} ref={ref_1}  onChange={handleChange1}></input>
        <div id="range-a-value">{val_1}</div>
      </div>
      <div id="range-b-holder">
        <input type="range" min="0" max={50} ref={ref_2}  onChange={handleChange2}></input>
        <div id="range-b-value">{val_2}</div>
      </div>
      <div id="sum">{ parseInt(val_1)+ parseInt(val_2)}</div>

    </>
  )
}


export default App;
