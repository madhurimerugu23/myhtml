import React from 'react';
import ReactDOM from 'react-dom';
class HelloWorld extends React.Component {

  render() {
 
  const continents = ['Africa','America','Asia','Australia','Europe'];
  
  const helloContinents = Array.from(continents, c => `Hello ${c}!`);
  
  const message = helloContinents.join(' ');
  
  return (
  
  <div title="Outer div">
<h3>Madhuri
</h3>
<h3>23255A0505</h3>

  <h1>{message}</h1>
  
  
  </div>
  
  );
  
  }
  
  }
  export default HelloWorld
  const element = <HelloWorld />;