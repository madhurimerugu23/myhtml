import React from "react";
import * as ReactDOM from 'react-dom';
import logo from './globe.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <h3>M.Madhuri</h3>
      <h2>23255A0505</h2>
      <br></br>
        <img src={logo} className="App-logo" alt="logo" />

        <p>

          <br></br>
         know more about globe
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Globe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>
      </header>
    </div>
  );
}


export default App;
/*class HelloWord extends React.Component
{
  render()
  {
  const continents=['asia','america','africa','srilanka'];
  const helloc=Array.from(continents,c=> 'hello ${c}!');
    const msg=helloc.join(' ');
    return(
    <div title="Ouetr div">
      <h3>{message}</h3>
    </div>
    );
  }

}
const obj=<HelloWord/>;
ReactDOM.render(obj,document.getElementById(contents));*/
