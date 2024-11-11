
import React from 'react';
import { useState } from 'react';
import './App.css';
function Simple_calci() {
  
  const [x,setx]=useState(" ");
  const [y,sety]=useState(" ");
  let n=parseInt(x);
  let m=parseInt(y);
  const [res,setRes]=useState(" ");
  function add(e) {
    setRes(n+m);
  }
  function sub(e) {
    setRes(n-m);
  }
  function mul(e) {
    setRes(n*m);
  }
  function div(e) {
    setRes(n/m);
  }
  return (
    <div className="App">
      <h2>Simple Calculator</h2>
      x:
      <input type="text" value={x}
      onChange={(e) => setx(e.target.value)}/><br></br>
      <br></br>
      <label>y:</label>
      <input type="text" value={y}
      onChange={(e) => sety(e.target.value)}/>
      <br></br><br></br>
      <button onClick={add}>+</button>
      <br></br>
      <button onClick={sub}>-</button>
      <br></br>
      <button onClick={mul}>*</button>
      <br></br>
      <button onClick={div}>/</button>
      <br></br>
      <label>res:</label>
      <input type="text" value={res}></input>
    </div>
  );
}
export default Simple_calci;

